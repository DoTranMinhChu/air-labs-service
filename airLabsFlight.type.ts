export type AirLabsFlightTrackerType = {
  /**
   *Bounding box (South-West Lat, South-West Long, North-East Lat, North-East Long)
   *
   * Example : "47.12995075666307,-19.951171875000004,55.973798205076605,17.424316406250004"
   *
   * @type {string}
   */
  bbox?: string;

  /**
   * Map zoom level to reduce the number of objects in the visible area to speed up rendering.
   *
   * Example : 6
   *
   * @type {string}
   */
  zoom?: number;

  /**
   * Filtering by ICAO24 Hex address.
   *
   * Example : "344699"
   *
   * @type {string}
   */
  hex?: string;

  /**
   * Filtering by aircraft Registration number.
   *
   * Example : "EC-MGY"
   *
   * @type {string}
   */
  reg_number?: string;

  /**
   * Filtering by Airline ICAO code.
   *
   * Example : "VLG"
   *
   * @type {string}
   */
  airline_icao?: string;

  /**
   * Filtering by Airline IATA code.
   *
   * Example : "VY"
   *
   * @type {string}
   */
  airline_iata?: string;

  /**
   * Filtering by Airline Country ISO 2 code from Countries DB.
   *
   * Example : "ES"
   *
   * @type {string}
   */
  flag?: string;

  /**
   * Filtering by Flight ICAO code-number.
   *
   * Example : "VLG6942"
   *
   * @type {string}
   */
  flight_icao?: string;

  /**
   * Filtering by Flight IATA code-number.
   *
   * Example : "VY6942"
   *
   * @type {string}
   */
  flight_iata?: string;

  /**
   * Filtering by Flight number only.
   *
   * Example : "6942"
   *
   * @type {string}
   */
  flight_number?: string;

  /**
   * Filtering by departure Airport ICAO code.
   *
   * Example : "LFPO"
   *
   * @type {string}
   */
  dep_icao?: string;

  /**
   * Filtering by departure Airport IATA code.
   *
   * Example : "ORY"
   *
   * @type {string}
   */
  dep_iata?: string;

  /**
   * Filtering by arrival Airport ICAO code.
   *
   * Example : "EGKK"
   *
   * @type {string}
   */
  arr_icao?: string;

  /**
   * Filtering by arrival Airport IATA code.
   *
   * Example : "LGW"
   *
   * @type {string}
   */
  arr_iata?: string;

  /**
   * Fields to return (comma separated, e.g.: hex,airline_iata,lat,lng)
   *
   * Example : "hex,flag,lat,lng,dir,alt"
   *
   * @type {string}
   */
  _fields?: string;

  /**
   * View format - object (default) or array (good for browser)
   *
   *
   * @type {string}
   */
  _view?: "object" | "array";
};

export type AirLabsFlightScheduleType = {
  /**
   * Query by departure Airport IATA code.
   *
   * Example : "ORY"
   *
   * @type {string}
   */
  dep_iata: string;

  /**
   * Query by departure Airport ICAO code.
   *
   * Example : "LFPO"
   *
   * @type {string}
   */
  dep_icao: string;

  /**
   * Query by arrival Airport IATA code.
   *
   * Example : "EGKK"
   *
   * @type {string}
   */
  arr_icao: string;

  /**
   * 	Query by arrival Airport ICAO code.
   *
   * Example : "LGW"
   *
   * @type {string}
   */
  arr_iata: string;

  /**
   * Query by 1 IATA code or filter by many IATA codes (if querying by airport)
   *
   * Example : "VY"
   *
   * @type {string}
   */
  airline_iata: string;

  /**
   * Query by 1 ICAO code or filter by many ICAO codes (if querying by airport)
   *
   * Example : "VLG"
   *
   * @type {string}
   */
  airline_icao: string;

  /**
   * Query by Flight ICAO code-number.
   *
   * Example : "VLG6942"
   *
   * @type {string}
   */
  flight_icao: string;

  /**
   * Query by Flight IATA code-number.
   *
   * Example : "VY6942"
   *
   * @type {string}
   */
  flight_iata: string;

  /**
   * Fields to return (comma separated, e.g.: hex,airline_iata,lat,lng)
   *
   * Example : "hex,flag,lat,lng,dir,alt"
   *
   * @type {string}
   */
  _fields?: string;

  /**
   * View format - object (default) or array (good for browser)
   *
   *
   * @type {number}
   */
  limit?: number;

  /**
   * View format - object (default) or array (good for browser)
   *
   *
   * @type {number}
   */
  offset?: number;
};

export type AirLabsFlightDelayType = {
  /**
   * Minimum delayed time (in minutes. > 30 min)
   *
   * Example : "ORY"
   *
   * @type {string}
   */
  delay: string;

  /**
   * Flights type - departures or arrivals
   *
   * Example : "departures"
   *
   * @type {string}
   */
  type: "departures" | "arrivals";

  /**
   * Filtering by departure Airport IATA code.
   *
   * Example : "ORY"
   *
   * @type {string}
   */
  dep_iata?: string;

  /**
   * Filtering by departure Airport ICAO code.
   *
   * Example : "LFPO"
   *
   * @type {string}
   */
  dep_icao?: string;

  /**
   * Filtering by arrival Airport IATA code.
   *
   * Example : "LGW"
   *
   * @type {string}
   */
  arr_iata?: string;

  /**
   * Filtering by arrival Airport ICAO code.
   *
   * Example : "EGKK"
   *
   * @type {string}
   */
  arr_icao?: string;

  /**
   * Filtering by Airline ICAO code.
   *
   * Example : "VLG"
   *
   * @type {string}
   */
  airline_icao?: string;

  /**
   * Query by 1 IATA code or filter by many IATA codes (if querying by airport)
   *
   * Example : "VY"
   *
   * @type {string}
   */
  airline_iata?: string;

  /**
   * Filtering by Flight ICAO code-number.
   *
   * Example : "VLG6942"
   *
   * @type {string}
   */
  flight_icao?: string;

  /**
   * Filtering by Flight IATA code-number.
   *
   * Example : "VY6942"
   *
   * @type {string}
   */
  flight_iata?: string;

  /**
   * Filtering by Flight number only.
   *
   * Example : "6942"
   *
   * @type {string}
   */
  flight_number?: string;

  /**
   * Fields to return (comma separated, e.g.: hex,airline_iata,lat,lng)
   *
   * Example : "airline_iata,airline_icao,flight_iata,flight_icao,flight_number,cs_airline_iata"
   *
   * @type {string}
   */
  _fields?: string;

  /**
   * View format - object (default) or array (good for browser)
   *
   *
   * @type {number}
   */
  limit?: number;

  /**
   * View format - object (default) or array (good for browser)
   *
   *
   * @type {number}
   */
  offset?: number;
};

export type AirLabsFlightInformationType = {
  /**
   * Filtering by Flight ICAO code-number.
   *
   * Example : "VLG6942"
   *
   * @type {string}
   */
  flight_icao?: string;

  /**
   * Filtering by Flight IATA code-number.
   *
   * Example : "VY6942"
   *
   * @type {string}
   */
  flight_iata?: string;
};

export type AirLabsCreateListenerType = {
  /**
   * Specify your server url to receive incoming updates via the outgoing webhook.
   *
   * Example : "http://localhost:3000"
   *
   * @type {string}
   */
  webhook_url: string;

  /**
   * Query by 1 IATA code or filter by many IATA codes (if querying by airport)
   *
   * Example : "VY"
   *
   * @type {string}
   */
  airline_iata?: string;

  /**
   * Filtering by Airline ICAO code.
   *
   * Example : "VLG"
   *
   * @type {string}
   */
  airline_icao?: string;

  /**
   * Filtering by departure Airport IATA code.
   *
   * Example : "ORY"
   *
   * @type {string}
   */
  dep_iata?: string;

  /**
   * Filtering by departure Airport ICAO code.
   *
   * Example : "LFPO"
   *
   * @type {string}
   */
  dep_icao?: string;

  /**
   * Listen changes by Departure Date (YYYY-MM-DD).
   *
   * @type {string}
   */
  dep_date?: string;

  /**
   * Listen changes by Departure Time (HH:mm:ss).
   *
   * @type {string}
   */
  dep_time?: string;

  /**
   * Filtering by arrival Airport IATA code.
   *
   * Example : "LGW"
   *
   * @type {string}
   */
  arr_iata?: string;

  /**
   * Filtering by arrival Airport ICAO code.
   *
   * Example : "EGKK"
   *
   * @type {string}
   */
  arr_icao?: string;

  /**
   * Listen changes by Arrival Date (YYYY-MM-DD).
   *
   *
   * @type {string}
   */
  arr_date?: string;

  /**
   * Listen changes by Arrival Time (HH:mm:ss).
   *
   *
   * @type {string}
   */
  arr_time?: string;

  /**
   * Filtering by Flight number only.
   *
   * Example : "6942"
   *
   * @type {string}
   */
  flight_number?: string;

  /**
   * Fields to listen changes - dep_terminal, dep_gate, dep_estimated, arr_terminal, arr_gate, arr_baggage,
   * arr_estimated, status, duration, dep_delayed, arr_delayed, arr_iata, arr_icao (comma-separated)
   * or leave empty to listen all changes (by default).
   *
   * Example : "dep_terminal, dep_gate, dep_estimated, arr_terminal, arr_gate, arr_baggage"
   *
   * @type {string}
   */
  _fields?: string;
};

export type AirLabsUnListenerType = {
  /**
   * The ID of the created listener.
   *
   * Example : 99
   *
   * @type {string}
   */
  listener_id: number;
};
