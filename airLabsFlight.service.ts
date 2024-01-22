import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosBase";
import { AirLabsServiceConfigType, IAirLabsResponse } from "./airLabs.type";
import {
  IAirLabsCreateListenerResponse,
  IAirLabsFlightDelayResponse,
  IAirLabsFlightInformationResponse,
  IAirLabsFlightScheduleResponse,
  IAirLabsFlightTrackerResponse,
  IAirLabsWebhookResponse,
} from "./airLabsFlight.interface";
import {
  AirLabsFlightDelayType,
  AirLabsFlightInformationType,
  AirLabsFlightScheduleType,
  AirLabsFlightTrackerType,
  AirLabsCreateListenerType,
  AirLabsUnListenerType,
} from "./airLabsFlight.type";

export class AirLabsFlightService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  constructor(airLabsServiceConfig: AirLabsServiceConfigType) {
    this.#_apiKey = airLabsServiceConfig.apiKey;
    this.#_baseURL = airLabsServiceConfig.baseUrl;
    this.#_axiosInstance = axiosInstance(this.#_baseURL);
  }

  /**
   * In this part of the documentation, we describe how you can take full advantage of the real-time Flight API.
   *
   * Some of our customers use flight data api to monitor individual flights,
   * display information in their applications, and guide users through flight preparation.
   *
   * Some provide flight data on a map, displaying absolutely all active flights in a convenient format
   * with constantly updated information on status, coordinates, speed, direction and other useful data.
   *
   * Others use data on flight regularity and airspace density to calculate environmental impacts and build regional climate models.
   *
   * Imagine how many truly unique ideas you can implement using the Flight API to its full potential!
   *
   * Just take a look at this Flight Radar API https://airlabs.co/example/map.
   *
   * @param params
   * @returns {IAirLabsResponse<Array<IAirLabsFlightTrackerResponse>> | Array<Array<any>>}
   */
  async getRealTimeFlightTracker(
    params: AirLabsFlightTrackerType
  ): Promise<
    | IAirLabsResponse<Array<IAirLabsFlightTrackerResponse>>
    | Array<Array<any>>
  > {
    return (
      await this.#_axiosInstance.get<
        | IAirLabsResponse<Array<IAirLabsFlightTrackerResponse>>
        | Array<Array<any>>
      >("api/v9/flights", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   *
   * The real-time flight schedule database reflects the current status of the departure and boarding queue.
   *
   * At the moment, the Schedules API returns results up to 10 hours ahead at most.
   *
   * Each departure or arrival airport displays these schedules in the lounges and terminal or gate areas.
   *
   * Using Flight Schedules API, you can create your own timetable - in the app, on the site, in watches, bots, and wherever.
   *
   * You can give users of your products the best service imaginable.
   *
   * Just take a look at this Flight Radar API https://airlabs.co/example/schedules
   *
   * @param params
   * @returns {IAirLabsResponse<Array<IAirLabsFlightScheduleResponse>>}
   */
  async getFlightSchedules(
    params: AirLabsFlightScheduleType
  ): Promise<IAirLabsResponse<Array<IAirLabsFlightScheduleResponse>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsFlightScheduleResponse>>
      >("api/v9/schedules", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   *
   * Real-time flight delay data reflects current delays of departing or arriving flights.
   *
   * Using the Flight Delay API, you can monitor all delays in the world, at all airports simultaneously, or filter as you wish.
   *
   * This API was designed primarily for services such as airport transfers or insurance and flight delay compensation services.
   *
   * @param params
   * @returns {IAirLabsResponse<Array<IAirLabsFlightDelayResponse>>}
   */
  async getFlightDelays(
    params: AirLabsFlightDelayType
  ): Promise<IAirLabsResponse<Array<IAirLabsFlightDelayResponse>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsFlightDelayResponse>>
      >("api/v9/delays", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * Alerts API provides access to webhook-based notifications about changes in flight details.
   *
   * Subscriptions are initiated by a call to the Listen API to monitor flights by filter, they exist until they are removed by the Unlisten API.
   *
   * APIs are needed if you need to notify users of changes in status, terminal, gate or arrival, estimated time, if there are delays at airports.
   *
   * Usually, flight updates depend on many factors, and often airlines and airports publish this information in advance, but there are delays, usually 1-10 minutes, compared to what may be known on the displays directly at the airport.
   *
   * Some data, such as departure gate, can only be known when the plane is parked at the gate, while other data, such as departure and arrival times, are calculated from aggregated flight data at departure and arrival airports.
   *
   * https://airlabs.co/example/flight
   *
   * @param params
   * @returns {IAirLabsResponse<IAirLabsCreateListenerResponse>}
   */
  async registerListener(
    params: AirLabsCreateListenerType
  ): Promise<IAirLabsResponse<IAirLabsCreateListenerResponse>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<IAirLabsCreateListenerResponse>
      >("api/v9/listen", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * Alerts API provides access to webhook-based notifications about changes in flight details.
   *
   * Subscriptions are initiated by a call to the Listen API to monitor flights by filter, they exist until they are removed by the Unlisten API.
   *
   * APIs are needed if you need to notify users of changes in status, terminal, gate or arrival, estimated time, if there are delays at airports.
   *
   * Usually, flight updates depend on many factors, and often airlines and airports publish this information in advance, but there are delays, usually 1-10 minutes, compared to what may be known on the displays directly at the airport.
   *
   * Some data, such as departure gate, can only be known when the plane is parked at the gate, while other data, such as departure and arrival times, are calculated from aggregated flight data at departure and arrival airports.
   *
   * https://airlabs.co/example/flight
   *
   * @param params
   * @returns {IAirLabsResponse<{unlistened:true}>}
   */
  async unRegisterListener(
    params: AirLabsUnListenerType
  ): Promise<IAirLabsResponse<{ unlistened: true }>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<{ unlistened: true }>
      >("api/v9/unlisten", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }

  /**
   * Alerts API provides access to webhook-based notifications about changes in flight details.
   *
   * Subscriptions are initiated by a call to the Listen API to monitor flights by filter, they exist until they are removed by the Unlisten API.
   *
   * APIs are needed if you need to notify users of changes in status, terminal, gate or arrival, estimated time, if there are delays at airports.
   *
   * Usually, flight updates depend on many factors, and often airlines and airports publish this information in advance, but there are delays, usually 1-10 minutes, compared to what may be known on the displays directly at the airport.
   *
   * Some data, such as departure gate, can only be known when the plane is parked at the gate, while other data, such as departure and arrival times, are calculated from aggregated flight data at departure and arrival airports.
   *
   * https://airlabs.co/example/flight
   *
   * @param params
   * @returns {IAirLabsResponse<{unlistened:true}>}
   */
  async getAllListeners(): Promise<
    IAirLabsResponse<{ unlistened: true }>
  > {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<{ unlistened: true }>
      >("api/v9/listeners", {
        params: {
          api_key: this.#_apiKey,
        },
      })
    )?.data;
  }

  /**
   * To see the history of webhooks sent to your server, use the Webhooks method
   *
   * https://airlabs.co/example/flight
   *
   * @param params
   * @returns {IAirLabsResponse<Array<IAirLabsWebhookResponse>>}
   */
  async getHistoryWebhooks(
    days?: number
  ): Promise<IAirLabsResponse<Array<IAirLabsWebhookResponse>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsWebhookResponse>>
      >("api/v9/webhooks", {
        params: {
          api_key: this.#_apiKey,
          days,
        },
      })
    )?.data;
  }

  /**
   * The detailed Flight Data API is a perfect combination of schedule data, real-time flight data, and aircraft information for a specific scheduled & live flight.
   *
   * This is absolutely essential flight information API for any travel startup, which includes actual time of arrival/departure, estimated time of arrival/departure, flight status changes, etc.
   *
   * Follow this basic example of flight display.
   *
   * https://airlabs.co/example/flight
   *
   * @param params
   * @returns {IAirLabsResponse<Array<IAirLabsFlightInformationResponse>>}
   */
  async getInformationFlight(
    params: AirLabsFlightInformationType
  ): Promise<IAirLabsResponse<Array<IAirLabsFlightInformationResponse>>> {
    return (
      await this.#_axiosInstance.get<
        IAirLabsResponse<Array<IAirLabsFlightInformationResponse>>
      >("api/v9/flight", {
        params: Object.assign(params, {
          api_key: this.#_apiKey,
        }),
      })
    )?.data;
  }
}
