import api from "@/services/api";
import { AxiosResponse } from "axios";
import { ICity } from "@/shared/types/services.interfaces";

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

  return {
    getCities,
  };
}

export const ibgeStatisticsService = service();
