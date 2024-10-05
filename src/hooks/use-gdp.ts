import { useQuery } from "@tanstack/react-query";
import { ibgeStatisticsService } from "@/services/ibge-statistics";
import { IGDP } from "@/shared/types/services.interfaces";

export function useGDP(cityId: number) {
  return useQuery<Array<IGDP>>({
    queryKey: ["GDP", cityId],
    queryFn: () => ibgeStatisticsService.getGDP(cityId),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 5,
  });
}
