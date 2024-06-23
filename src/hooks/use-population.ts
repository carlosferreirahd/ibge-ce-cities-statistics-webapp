import { useQuery } from "@tanstack/react-query";
import { ibgeStatisticsService } from "@/services/ibge-statistics";
import { IPopulation } from "@/shared/types/services.interfaces";

export function usePopulation(cityId: number) {
  return useQuery<Array<IPopulation>>({
    queryKey: ["population", cityId],
    queryFn: () => ibgeStatisticsService.getPopulation(cityId),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 5,
  });
}
