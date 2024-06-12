import { useQuery } from "@tanstack/react-query";
import { ibgeStatisticsService } from "@/services/ibge-statistics";
import { ICity } from "@/shared/types/services.interfaces";

export function useCities() {
  return useQuery<Array<ICity>>({
    queryKey: ["cities-list"],
    queryFn: ibgeStatisticsService.getCities,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 5,
  });
}
