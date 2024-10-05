import { useMemo } from "react";
import { FetchError } from "@/components/fetch-error";
import { usePopulation } from "@/hooks/use-population";
import { MultiChart } from "@/components/multi-chart";

interface PopulationChartProps {
  cityId: number;
}

export function PopulationChart({
  cityId
}: PopulationChartProps) {

  const {
    data,
    isPending,
    isError,
    error
  } = usePopulation(cityId);

  const labels = useMemo(() => (data || []).map(pop => pop.ano), [data]);

  const values = useMemo(() => (data || []).map(pop => pop.populacao), [data]);

  if (isPending) {
    return (
      <div className="skeleton w-full h-60" />
    );
  }

  if (isError) {
    return (
      <FetchError
        title="Erro ao buscar dados populacionais"
        message={error?.message}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-fade animate-once">
      <MultiChart
        labels={labels}
        values={values}
        xAxisTitle="Anos"
        yAxisTitle="População"
      />
    </div>
  );
}
