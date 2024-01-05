export type AirLabsSuggestDataType = {
  /**
   * Part of the destination name - airport, city or country.
   *
   * Between 3 and 30 characters.
   *
   * Example : spain
   *
   * @type {string}
   */
  search: string;

  /**
   * 2 letter language code
   *
   * @type {string}
   */
  lang?: string;

  /**
   * Fields to return (comma separated, e.g.: name,iata_code,icao_code,lat,lng)
   *
   * Example : "name,iata_code,icao_code,lat,lng"
   *
   * @type {string}
   */
  _fields?: string;
};

export type AirLabsFlightsDataType = {
  /**
   * Filtering by Airline IATA code.
   *
   *
   * @type {string}
   */
  iata_code?: string;

  /**
   * Filtering by IATA prefix number.
   *
   * @type {string}
   */
  iata_prefix?: string;

  /**
   * Filtering by IATA accounting number.
   *
   * @type {string}
   */
  iata_accounting?: string;

  /**
   * Filtering by Airline ICAO code.
   *
   * @type {string}
   */
  icao_code?: string;

  /**
   * Filtering by ICAO callsign.
   *
   * @type {string}
   */
  callsign?: string;

  /**
   * Filtering by Airline name.
   * @type {string}
   */
  name?: string;

  /**
   * Filtering by Country ISO 2 code from Countries DB.
   *
   * @type {string}
   */
  country_code?: string;
  /**
   * Fields to return (comma separated, e.g.: name,iata_code,icao_code)
   *
   * @type {string}
   */
  _fields?: string;
};

export type AirLabsAirportsDataType = {
  /**
   * Filtering by Airport IATA code.
   *
   *
   * @type {string}
   */
  iata_code?: string;

  /**
   * Filtering by Airport ICAO code.
   *
   * @type {string}
   */
  icao_code?: string;

  /**
   * Filtering by IATA City code.
   *
   * @type {string}
   */
  city_code?: string;

  /**
   * Filtering by Country ISO 2 code from Countries DB.
   *
   * @type {string}
   */
  country_code?: string;

  /**
   * Fields to return (comma separated, e.g.: name,iata_code,icao_code,lat,lng)
   *
   * @type {string}
   */
  _fields?: string;
};

export type AirLabsCitiesDataType = {
  /**
   * Filtering by IATA City code.
   *
   * @type {string}
   */
  city_code?: string;

  /**
   * Filtering by Country ISO 2 code from Countries DB.
   *
   * @type {string}
   */
  country_code?: string;

  /**
   * Fields to return (comma separated, e.g.: name,city_code,lat,lng,country_code)
   *
   * @type {string}
   */
  _fields?: string;
};

export type AirLabsFleetsDataType = {
  /**
   * The maximum number of rows is 500, and 50 for free keys.
   *
   * @type {number}
   */
  limit?: number;

  /**
   * Pagination offset for use with result limits (0+ until request.has_more)
   *
   * @type {number}
   */
  offset?: number;

  /**
   * Filtering by Airline IATA code.
   *
   * @type {string}
   */
  airline_iata?: string;

  /**
   * Filtering by Airline ICAO code.
   *
   * @type {string}
   */
  airline_icao?: string;

  /**
   *	Filtering by ICAO24 Hex address.
   *
   * @type {string}
   */
  hex?: string;

  /**
   * Filtering by aircraft Registration number.
   *
   * @type {number}
   */
  reg_number?: number;

  /**
   * Filtering by Manufacturer Serial Number.
   *
   * @type {string}
   */
  msn?: string;

  /**
   * Filtering by Country ISO 2 code from Countries DB.
   *
   * @type {string}
   */
  flag?: string;

  /**
   * Fields to return (comma separated, e.g.: hex,airline_iata,manufacturer)
   *
   * @type {string}
   */
  _fields?: string;
};

export type AirLabsRoutesDataType = {
  /**
   *	Filtering by departure Airport IATA code.
   *
   * @type {string}
   */
  dep_iata: string;

  /**
   *	Filtering by departure Airport ICAO code.
   *
   * @type {string}
   */
  dep_icao: string;

  /**
   *	Filtering by arrival Airport IATA code.
   *
   * @type {string}
   */
  arr_iata: string;

  /**
   *	Filtering by arrival Airport ICAO code.
   *
   * @type {string}
   */
  arr_icao: string;

  /**
   *	Filtering by Airline ICAO code.
   *
   * @type {string}
   */
  airline_icao: string;

  /**
   *	Filtering by Airline IATA code.
   *
   * @type {string}
   */
  airline_iata: string;

  /**
   *	Filtering by Flight ICAO code-number.
   *
   * @type {string}
   */
  flight_icao?: string;

  /**
   *	Filtering by Flight IATA code-number.
   * @type {string}
   */
  flight_iata?: string;

  /**
   *	Filtering by Flight number only.
   * @type {number}
   */
  flight_number?: number;

  /**
   * Fields to return (comma separated, e.g.: hex,airline_iata,manufacturer)
   *
   * @type {string}
   */
  _fields?: string;

  /**
   * The maximum number of rows is 500, and 50 for free keys.
   *
   * @type {number}
   */
  limit?: number;

  /**
   * Pagination offset for use with result limits (0+ until request.has_more)
   *
   * @type {number}
   */
  offset?: number;
};
export type AirLabsCountriesDataType = {
  /**
   * TFiltering by Country ISO 2 code.
   *
   * @type {string}
   */
  code?: string;

  /**
   *	Filtering by Country ISO 3 code.
   *
   * @type {string}
   */
  code3?: string;

  /**
   * Filtering by continent code - AF, AN, AS, EU, NA, OC, SA
   *
   * @type {string}
   */
  continent?: string;

  /**
   * Fields to return (comma separated, e.g.: name,code,code3,currency)
   *
   * @type {string}
   */
  _fields?: string;
};
