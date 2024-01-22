import { AxiosInstance } from "axios";
import { AirLabsServiceConfigType, IAirLabsResponse } from "./airLabs.type";
import { axiosInstance } from "./axiosBase";
import { IAirLabsNearByAirport } from "./airLabsAirport.interface";
import { AirLabsNearbyAirportType } from "./airLabsAirport.type";

export class AirLabsAirportService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  constructor(airLabsServiceConfig: AirLabsServiceConfigType) {
    this.#_apiKey = airLabsServiceConfig.apiKey;
    this.#_baseURL = airLabsServiceConfig.baseUrl;
    this.#_axiosInstance = axiosInstance(this.#_baseURL);
  }

  /**
   * You can use the Airports API in your services to show users the nearest departure airport or all available airports within a given radius.
   *
   * Some of our clients, thanks to the NearBy API, are developing smart assistant bots that do more than their users expect.
   *
   *
   * @param params
   * @returns {IAirLabsNearByAirport}
   */
  async getNearbyAirport(
    params: AirLabsNearbyAirportType
  ): Promise<IAirLabsResponse<Array<IAirLabsNearByAirport>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsNearByAirport>>
      >("api/v9/nearby", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }
}
