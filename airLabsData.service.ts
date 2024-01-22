import { AxiosInstance } from "axios";
import { AirLabsServiceConfigType, IAirLabsResponse } from "./airLabs.type";
import { axiosInstance } from "./axiosBase";
import {
  IAirLabsAirportData,
  IAirLabsCityData,
  IAirLabsFleetData,
  IAirLabsFlightData,
  IAirLabsRouteData,
  IAirLabsSuggestResponse,
} from "./airLabsData.interface";
import {
  AirLabsAirportsDataType,
  AirLabsCitiesDataType,
  AirLabsCountriesDataType,
  AirLabsFleetsDataType,
  AirLabsFlightsDataType,
  AirLabsRoutesDataType,
  AirLabsSuggestDataType,
} from "./airLabsData.type";
export class AirLabsDataService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  constructor(airLabsServiceConfig: AirLabsServiceConfigType) {
    this.#_apiKey = airLabsServiceConfig.apiKey;
    this.#_baseURL = airLabsServiceConfig.baseUrl;
    this.#_axiosInstance = axiosInstance(this.#_baseURL);
  }

  /**
   * Airport Autocomplete, like NearBy Service, can be used to improve the user experience in your applications by allowing you to implement intelligent autocomplete for destination names.
   *
   * Any travel destination search app or site can improve metrics by anticipating user search queries, in any language and possible spelling.
   *
   *
   * @param params
   * @returns {IAirLabsSuggestResponse}
   */
  async suggest(
    params: AirLabsSuggestDataType
  ): Promise<IAirLabsResponse<IAirLabsSuggestResponse>> {
    return (
      await this.#_axiosInstance.get<IAirLabsResponse<IAirLabsSuggestResponse>>(
        "api/v9/suggest",
        {
          params: Object.assign(params, {
            api_key: this.#_apiKey,
          }),
        }
      )
    )?.data;
  }

  /**
   * Airlines API is the most essential data for any travel startup and companies related to the airline industry.
   *
   * A complete and reliable set of airline data becomes essential if your app, website or system wants to properly meet customer expectations,
   * whether it is a b2b or b2c market, it does not matter, customers always want the highest quality products.
   *
   *
   * @param params
   * @returns {Array<IAirLabsFlightData>}
   */
  async getAirlines(
    params: AirLabsFlightsDataType
  ): Promise<IAirLabsResponse<Array<IAirLabsFlightData>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsFlightData>>
      >("api/v9/airlines", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * Airlines API is the most essential data for any travel startup and companies related to the airline industry.
   *
   * A complete and reliable set of airline data becomes essential if your app, website or system wants to properly meet customer expectations,
   * whether it is a b2b or b2c market, it does not matter, customers always want the highest quality products.
   *
   *
   * @param params
   * @returns {Array<IAirLabsAirportData>}
   */
  async getAirports(
    params: AirLabsAirportsDataType
  ): Promise<IAirLabsResponse<Array<IAirLabsAirportData>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsAirportData>>
      >("api/v9/airports", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * City data complements and extends airport data, if you need to create functionality that does not depend on airports,
   * you can use cities instead, as well as combine them.
   *
   * The cities API allows you to display destinations on a map, grouping airports into clusters of cities.
   *
   * It is also important to know that when integrated with various ticket booking systems, hotel search and GDS-services,
   * IATA city codes can act as a metropolitan area search, showing results at all airports in the city.
   *
   *
   * @param params
   * @returns {Array<IAirLabsCityData>}
   */
  async getCities(
    params: AirLabsCitiesDataType
  ): Promise<IAirLabsResponse<Array<IAirLabsCityData>>> {
    return (
      await this.#_axiosInstance.get<IAirLabsResponse<Array<IAirLabsCityData>>>(
        "api/v9/cities",
        {
          params: Object.assign(params, {
            api_key: this.#_apiKey,
          }),
        }
      )
    )?.data;
  }

  /**
   * This page contains basic and minimum required airplanes information for every airline in the world.
   *
   * Augment your products with data from the Aircraft Fleet Database, tell users the age, model or type of aircraft.
   *
   * Thanks to the Aircraft Fleet Database API our customers increase the quality of the information provided in their websites and applications.
   *
   *
   * @param params
   * @returns {Array<IAirLabsFleetData>}
   */
  async getFleets(
    params: AirLabsFleetsDataType
  ): Promise<IAirLabsResponse<Array<IAirLabsFleetData>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsFleetData>>
      >("api/v9/fleets", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * Airline Routes Database contains up-to-date schedules that are operated by airlines. This data is not real-time data
   * and does not display flight statuses.
   *
   * Together with API Schedules you can use data from Airline Routes Database to predict flight schedules for the distant future.
   *
   * Knowing what days of the week and at what time a particular flight departs, you can easily build any routes with connections.
   *
   *
   * @param params
   * @returns {Array<IAirLabsRouteData>}
   */
  async getRoutes(
    params: AirLabsRoutesDataType
  ): Promise<IAirLabsResponse<Array<IAirLabsRouteData>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsRouteData>>
      >("api/v9/routes", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * Airline Routes Database contains up-to-date schedules that are operated by airlines. This data is not real-time data
   * and does not display flight statuses.
   *
   * Together with API Schedules you can use data from Airline Routes Database to predict flight schedules for the distant future.
   *
   * Knowing what days of the week and at what time a particular flight departs, you can easily build any routes with connections.
   *
   *
   * @param params
   * @returns {Array<AirLabsCountriesDataType>}
   */
  async getCountries(
    params: AirLabsRoutesDataType
  ): Promise<IAirLabsResponse<Array<AirLabsCountriesDataType>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<AirLabsCountriesDataType>>
      >("api/v9/countries", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }
}
