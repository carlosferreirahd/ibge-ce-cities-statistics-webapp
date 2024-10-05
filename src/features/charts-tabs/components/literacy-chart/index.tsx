import { useMemo } from "react";
import { FetchError } from "@/components/fetch-error";
import { useLiteracy } from "@/hooks/use-literacy";
import { MultiChart } from "@/components/multi-chart";

interface LiteracyChartProps {
  cityId: number;
}

export function LiteracyChart({
  cityId
}: LiteracyChartProps) {

  const {
    data,
    isPending,
    isError,
    error
  } = useLiteracy(cityId);

  const labels = useMemo(() => (data || []).map(pop => pop.ano), [data]);

  const values = useMemo(() => (data || []).map(pop => pop.taxa), [data]);

  if (isPending) {
    return (
      <div className="skeleton w-full h-60" />
    );
  }

  if (isError) {
    return (
      <FetchError
        title="Erro ao buscar dados de alfabetização"
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
        yAxisTitle="Alfabetização"
      />
    </div>
  );
}
