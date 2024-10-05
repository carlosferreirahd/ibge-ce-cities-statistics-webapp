import { useMemo } from "react";
import { FetchError } from "@/components/fetch-error";
import { useGDP } from "@/hooks/use-gdp";
import { MultiChart } from "@/components/multi-chart";

interface GDPChartProps {
  cityId: number;
}

export function GDPChart({
  cityId
}: GDPChartProps) {

  const {
    data,
    isPending,
    isError,
    error
  } = useGDP(cityId);

  const labels = useMemo(() => (data || []).map(gdp => gdp.ano), [data]);

  const values = useMemo(() => (data || []).map(gdp => gdp.valor), [data]);

  if (isPending) {
    return (
      <div className="skeleton w-full h-60" />
    );
  }

  if (isError) {
    return (
      <FetchError
        title="Erro ao buscar dados de PIB"
        message={error?.message}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <MultiChart
        labels={labels}
        values={values}
        xAxisTitle="Anos"
        yAxisTitle="PIB"
      />
    </div>
  );
}
