import { useQuery } from "@tanstack/react-query";
import { ibgeStatisticsService } from "@/services/ibge-statistics";
import { ILiteracy } from "@/shared/types/services.interfaces";

export function useLiteracy(cityId: number) {
  return useQuery<Array<ILiteracy>>({
    queryKey: ["literacy", cityId],
    queryFn: () => ibgeStatisticsService.getLiteracy(cityId),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 5,
  });
}
