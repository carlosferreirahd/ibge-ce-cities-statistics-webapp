import api from "@/services/api";
import { AxiosResponse } from "axios";
import {
  ICity,
  IGDP,
  ILiteracy,
  IPopulation,
} from "@/shared/types/services.interfaces";

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

  async function getLiteracy(cityId: number): Promise<Array<ILiteracy>> {
    try {
      const response: AxiosResponse<Array<ILiteracy>> = await api.get<
        Array<ILiteracy>
      >(`/alfabetizacao/${cityId}`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async function getGDP(cityId: number): Promise<Array<IGDP>> {
    try {
      const response: AxiosResponse<Array<IGDP>> = await api.get<Array<IGDP>>(
        `/pib/${cityId}`
      );
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return {
    getCities,
    getPopulation,
    getLiteracy,
    getGDP,
  };
}

export const ibgeStatisticsService = service();
