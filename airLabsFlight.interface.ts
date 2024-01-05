import { FlightTrackerType } from "./airLabsFlight.type";
export interface IAirLabsFlightResponse<T> extends IAirLabsFlight {
  response: T;
}

export interface IAirLabsFlight {
  request: IAirLabsFlightRequest;
  terms: string;
}

export interface IAirLabsFlightRequest {
  lang: string;
  currency: string;
  time: number;
  id: string;
  server: string;
  host: string;
  pid: number;
  key: {
    id: number;
    api_key: string;
    type: string;
    expired: string;
    registered: string;
    upgraded: any;
    limits_by_hour: number;
    limits_by_minute: number;
    limits_by_month: number;
    limits_total: number;
  };
  params: FlightTrackerType;
  version: number;
  method: string;
  client: {
    ip: string;
    geo: {
      country_code: string;
      country: string;
      continent: string;
      city: string;
      lat: number;
      lng: number;
      timezone: string;
    };
    connection: {
      type: string;
      isp_code: number;
      isp_name: string;
    };
    device: any;
    agent: any;
    karma: {
      is_blocked: boolean;
      is_crawler: boolean;
      is_bot: boolean;
      is_friend: boolean;
      is_regular: boolean;
    };
  };
}

export interface IAirLabsFlightTrackerResponse {
  /**
   *
   */
  hex: string;

  /**
   * Aircraft Registration Number
   */
  reg_number: string;

  /**
   * 	ISO 2 country code from Countries DB.
   */
  flag: string;

  /**
   * Aircraft Geo-Latitude for now.
   */
  lat: number;

  /**
   * Aircraft Geo-Longitude for now.
   */
  lng: number;

  /**
   * 	Aircraft elevation for now (meters).
   */
  alt: number;

  /**
   * 	Aircraft head direction for now.
   */
  dir: number;

  /**
   * Aircraft horizontal speed (km) for now.
   */
  speed: number;

  /**
   * 	Aircraft vertical speed (km) for now.
   */
  v_speed: number;

  /**
   * 	Aircraft squawk signal code.
   */
  squawk: string;

  /**
   * Flight number only.
   */
  flight_number: string;

  /**
   * Flight ICAO code-number.
   */
  flight_icao: string;

  /**
   * Flight IATA code-number.
   */
  flight_iata: string;

  /**
   * Departure Airport ICAO code.
   */
  dep_icao: string;

  /**
   * Departure Airport IATA code.
   */
  dep_iata: string;

  /**
   * Arrival Airport ICAO code.
   */
  arr_icao: string;

  /**
   * 	Arrival Airport IATA code.
   */
  arr_iata: string;

  /**
   * Airline ICAO code.
   */
  airline_icao: string;

  /**
   * Airline IATA code.
   */
  airline_iata: string;

  /**
   * Airline ICAO code.
   */
  aircraft_icao: string;

  /**
   * UNIX timestamp of last aircraft signal.
   */
  updated: number;

  /**
   * Current flight status - scheduled, en-route, landed.
   */
  status: "scheduled" | "en-route" | "landed";

  /**
   *
   */
  type: string;
}

export interface IAirLabsFlightScheduleResponse {
  /**
   * Airline IATA code
   */
  airline_iata: string;

  /**
   *Airline ICAO code.
   */
  airline_icao: string;

  /**
   * Flight IATA code-number.
   */
  flight_iata: string;

  /**
   * Flight ICAO code-number.
   */
  flight_icao: string;

  /**
   * Flight number only.
   */
  flight_number: string;

  /**
   * Codeshared airline IATA code.
   */
  cs_airline_iata: string;

  /**
   * Codeshared flight number.
   */
  cs_flight_number: string;

  /**
   * 	Codeshared flight IATA code-number.
   */
  cs_flight_iata: string;

  /**
   * Departure airport IATA code.
   */
  dep_iata: string;

  /**
   * Departure airport ICAO code.
   */
  dep_icao: string;

  /**
   * 	Estimated departure terminal.
   */
  dep_terminal: string;

  /**
   * Estimated departure gate.
   */
  dep_gate: string;

  /**
   * Departure time in the airport time zone.
   */
  dep_time: string;

  /**
   * 	Departure UNIX timestamp.
   */
  dep_time_ts: number;

  /**
   * Departure time in UTC time zone.
   */
  dep_time_utc: string;

  /**
   * Updated departure time in the airport time zone.
   */
  dep_estimated: string;

  /**
   * Updated departure UNIX timestamp.
   */
  dep_estimated_ts: number;

  /**
   * Updated departure time in UTC time zone.
   */
  dep_estimated_utc: string;

  /**
   * 	Actual departure time in the airport time zone.
   */
  dep_actual: string;

  /**
   * Actual departure UNIX timestamp.
   */
  dep_actual_ts: number;

  /**
   * Actual departure time in UTC time zone.
   */
  dep_actual_utc: string;

  /**
   * Arrival airport IATA code.
   */
  arr_iata: string;

  /**
   * Arrival airport ICAO code.
   */
  arr_icao: string;

  /**
   * Estimated arrival terminal.
   */
  arr_terminal: string;

  /**
   * Estimated arrival gate.
   */
  arr_gate: string;

  /**
   * Arrival baggage claim carousel number.
   */
  arr_baggage: string;

  /**
   * Arrival time in the airport time zone.
   */
  arr_time: string;

  /**
   * Arrival UNIX timestamp.
   */
  arr_time_ts: number;

  /**
   * Arrival time in UTC time zone.
   */
  arr_time_utc: string;

  /**
   * Updated arrival time in the airport time zone.
   */
  arr_estimated: string;

  /**
   * 	Updated arrival UNIX timestamp.
   */
  arr_estimated_ts: number;

  /**
   * 	Updated arrival time in UTC time zone.
   */
  arr_estimated_utc: string;

  /**
   * Actual arrival time in the airport time zone.
   */
  arr_actual: string;

  /**
   * Actual arrival UNIX timestamp.
   */
  arr_actual_ts: number;

  /**
   * Actual arrival time in UTC time zone.
   */
  arr_actual_utc: string;

  /**
   * Flight status - scheduled, cancelled, active, landed.
   */
  status: "scheduled" | "cancelled" | "active" | "landed";

  /**
   * Estimated flight time (in minutes).
   */
  duration: number;

  /**
   * (deprecated) Estimated flight delay time (in minutes).
   */
  delayed: number;

  /**
   * Estimated time of flight departure delay (in minutes).
   */
  dep_delayed: number;

  /**
   * 	Estimated time of flight arrival delay (in minutes).
   */
  arr_delayed: number;
}

export interface IAirLabsFlightDelayResponse {
  airline_iata: string;
  airline_icao: string;
  flight_iata: string;
  flight_icao: string;
  flight_number: string;
  cs_airline_iata: string;
  cs_flight_number: string;
  cs_flight_iata: string;
  dep_iata: string;
  dep_icao: string;
  dep_terminal: string;
  dep_gate: string;
  dep_time: string;
  dep_time_ts: number;
  dep_time_utc: string;
  dep_estimated: string;
  dep_estimated_ts: number;
  dep_estimated_utc: string;
  arr_iata: string;
  arr_icao: string;
  arr_terminal: string;
  arr_gate: string;
  arr_baggage: string;
  arr_time: string;
  arr_time_ts: number;
  arr_time_utc: string;
  arr_estimated: string;
  arr_estimated_ts: number;
  arr_estimated_utc: string;
  status: string;
  duration: number;
  delayed: number;
}

export interface IAirLabsFlightInformationResponse {
  /**
   * ICAO24 Hex address.
   */
  hex: string;

  /**
   * Aircraft Registration Number
   */
  reg_number: string;

  /**
   * Aircraft ICAO type.
   */
  aircraft_icao: string;

  /**
   * ISO 2 country code from Countries DB
   */
  flag: string;

  /**
   * 	Aircraft Geo-Latitude for now.
   */
  lat: number;

  /**
   * 	Aircraft Geo-Longitude for now.
   */
  lng: number;

  /**
   * Aircraft elevation for now (meters).
   */
  alt: number;

  /**
   * Aircraft head direction for now.
   */
  dir: number;

  /**
   * Aircraft horizontal speed (km) for now.
   */
  speed: number;

  /**
   * 	Aircraft vertical speed (km) for now.
   */
  v_speed: number;

  /**
   * 	Aircraft squawk signal code.
   */
  squawk: string;

  /**
   * Airline IATA code.
   */
  airline_icao: string;

  /**
   * 	Airline IATA code.
   */
  airline_iata: string;

  /**
   * 	Flight number only.
   */
  flight_number: string;

  /**
   * 	Flight ICAO code-number.
   */
  flight_icao: string;

  /**
   * Flight IATA code-number.
   */
  flight_iata: string;

  /**
   * Codeshared airline IATA code.
   */
  cs_airline_iata?: any;

  /**
   * Codeshared flight number.
   */
  cs_flight_number?: any;

  /**
   * Codeshared flight IATA code-number.
   */
  cs_flight_iata?: any;

  /**
   *Departure airport ICAO code.
   */
  dep_icao: string;

  /**
   * Departure airport IATA code.
   */
  dep_iata: string;

  /**
   * 	Estimated departure terminal.
   */
  dep_terminal?: any;

  /**
   * Estimated departure gate.
   */
  dep_gate: string;

  /**
   * Departure time in the airport time zone.
   */
  dep_time: string;

  /**
   * 	Departure UNIX timestamp.
   */
  dep_time_ts: number;

  /**
   * 	Departure time in UTC time zone.
   */
  dep_time_utc: string;

  /**
   * 	Updated departure time in the airport time zone.
   */
  dep_estimated: string;

  /**
   * Updated departure UNIX timestamp.
   */
  dep_estimated_ts: number;

  /**
   * Updated departure time in UTC time zone.
   */
  dep_estimated_utc: string;

  /**
   * Arrival airport ICAO code.
   */
  arr_icao: string;

  /**
   * Arrival airport IATA code.
   */
  arr_iata: string;

  /**
   * Estimated arrival terminal.
   */
  arr_terminal: string;

  /**
   * 	Estimated arrival gate
   */
  arr_gate: string;

  /**
   * Arrival baggage claim carousel number.
   */
  arr_baggage: string;

  /**
   * Arrival time in the airport time zone.
   */
  arr_time: string;

  /**
   * 	Arrival UNIX timestamp.
   */
  arr_time_ts: number;

  /**
   * 	Arrival time in UTC time zone.
   */
  arr_time_utc: string;

  /**
   * Updated arrival time in the airport time zone.
   */
  arr_estimated: string;

  /**
   * 	Updated arrival UNIX timestamp.
   */
  arr_estimated_ts: number;

  /**
   * Updated arrival time in UTC time zone.
   */
  arr_estimated_utc: string;

  /**
   * 	Estimated flight time (in minutes).
   */
  duration: number;

  /**
   * (deprecated) Estimated flight delay time (in minutes).
   */
  delayed?: number;

  /**
   * Estimated time of flight departure delay (in minutes).
   */
  dep_delayed?: number;

  /**
   * Estimated time of flight arrival delay (in minutes).
   */
  arr_delayed?: number;

  /**
   * UNIX timestamp of last aircraft signal.
   */
  updated: number;

  /**
   * 	Current flight status - scheduled, en-route, landed.
   */
  status: "status" | "en-route" | "landed";

  /**
   * 	Aircraft age (years)
   */
  age: number;

  /**
   * Aircraft built year
   */
  built: number;

  /**
   * Aircraft engine type - jet, piston, turboprop/turboshaft, electric.
   */
  engine: "jet" | "piston" | "turboprop/turboshaft" | "electric";

  /**
   * Aircraft engine number - 1, 2, 3, 4, 6, 8
   */
  engine_count: string;

  /**
   * Aircraft full model name.
   */
  model: string;

  /**
   * Aircraft manufacturer name
   */
  manufacturer: string;

  /**
   * Manufacturer serial number.
   */
  msn: string;

  /**
   * 	Aircraft type - landplane, seaplane, tiltrotor, helicopter, gyrocopter, amphibian.
   */
  type:
    | "landplane"
    | "seaplane"
    | "tiltrotor"
    | "helicopter"
    | "gyrocopter"
    | "amphibian";
}
export interface IAirLabsCreateListenerResponse {
  /**
   * The ID of the created listener.
   */
  listener_id: number;
}

export interface IAirLabsWebhookResponse {
  listener_id: number;
  webhook_id: number;
  webhook_url: string;
  created: string;
  performed: string;
  res_status: number;
  res_headers: {
    server: string;
    date: string;
    "content-type": string;
    "content-length": string;
    connection: string;
    vary: string;
    allow: string;
    "x-frame-options": string;
    "x-content-type-options": string;
    "referrer-policy": string;
    "cross-origin-opener-policy": string;
  };
  changed: string[];
  flight: IAirLabsFlightInformationResponse;
}
