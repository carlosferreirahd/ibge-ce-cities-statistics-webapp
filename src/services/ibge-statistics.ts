import api from "@/services/api";
import { AxiosResponse } from "axios";
import { ICity, IPopulation } from "@/shared/types/services.interfaces";

function service() {
  async function getCities(): Promise<Array<ICity>> {
    try {
      const response: AxiosResponse<Array<ICity>> = await api.get<Array<ICity>>(
        "/cidades"
      );
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async function getPopulation(cityId: number): Promise<Array<IPopulation>> {
    try {
      const response: AxiosResponse<Array<IPopulation>> = await api.get<
        Array<IPopulation>
      >(`/populacao/${cityId}`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return {
    getCities,
    getPopulation,
  };
}

export const ibgeStatisticsService = service();
