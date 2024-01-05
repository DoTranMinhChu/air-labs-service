import { EAirLabsLang } from "./airLabs.enum";

export interface IAirLabsSuggestResponse {
  countries: IAirLabsCountry[];
  cities: IAirLabsCity[];
  airports: IAirLabsAirport[];
  cities_by_airports: IAirLabsCitiesByAirport[];
  cities_by_countries: IAirLabsCitiesByCountry[];
  airports_by_cities: IAirLabsAirportsByCity[];
  airports_by_countries: IAirLabsAirportsByCountry[];
}

export interface IAirLabsCountry {
  code: string;
  code3: string;
  name: string;
  continent: string;
  currency: string;
}

export interface IAirLabsCity {
  country_code: string;
  lng: number;
  timezone: string;
  name: string;
  city_code: string;
  slug: string;
  lat: number;
  popularity: number;
}

export interface IAirLabsAirport {
  country_code: string;
  iata_code: string;
  lng: number;
  city: string;
  timezone: string;
  name: string;
  city_code: string;
  slug: string;
  lat: number;
  popularity: number;
}

export interface IAirLabsCitiesByAirport {
  country_code: string;
  lng: number;
  timezone: string;
  name: string;
  city_code: string;
  slug: string;
  lat: number;
  popularity: number;
}

export interface IAirLabsCitiesByCountry {
  country_code: string;
  lng: number;
  timezone: string;
  name: string;
  city_code: string;
  slug: string;
  lat: number;
  popularity: number;
}

export interface IAirLabsAirportsByCity {
  icao_code: string;
  country_code: string;
  iata_code: string;
  lng: number;
  city: string;
  timezone: string;
  name: string;
  city_code: string;
  slug: string;
  lat: number;
  popularity: number;
}

export interface IAirLabsAirportsByCountry {
  icao_code: string;
  country_code: string;
  iata_code: string;
  lng: number;
  city: string;
  timezone: string;
  name: string;
  city_code: string;
  slug: string;
  lat: number;
  popularity: number;
}

export interface IAirLabsFlightData {
  name: string;
  iata_code: string;
  iata_prefix: number;
  iata_accounting: number;
  icao_code: string;
  callsign: string;
  country_code: string;
  iosa_registered: number;
  is_scheduled: number;
  is_passenger: number;
  is_cargo: number;
  is_international: number;
  total_aircrafts: number;
  average_fleet_age: number;
  accidents_last_5y: number;
  crashes_last_5y: number;
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  slug: string;
}

export interface IAirLabsAirportData {
  name: string;
  iata_code: string;
  icao_code: string;
  lat: number;
  lng: number;
  alt: number;
  city: string;
  city_code: string;
  un_locode: string;
  timezone: string;
  country_code: string;
  phone: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  names: {
    [key in EAirLabsLang]: string;
  };
  runways: number;
  departures: number;
  connections: number;
  is_major: boolean;
  is_international: number;
  slug: string;
}

export interface IAirLabsCityData {
  name: string;
  city_code: string;
  un_locode: string;
  lat: number;
  lng: number;
  alt: number;
  timezone: string;
  country_code: string;
  population: number;
  names: {
    [key in EAirLabsLang]: string;
  };
  wikipedia: string;
  slug: string;
}

export interface IAirLabsFleetData {
  hex: string;
  reg_number: string;
  flag: string;
  airline_icao: string;
  airline_iata: string;
  seen: number;
  icao: string;
  iata: string;
  model: string;
  engine: string;
  engine_count: string;
  manufacturer: string;
  type: string;
  category: string;
  built: number;
  age: number;
  msn: string;
  line: string;
  lat: number;
  lng: number;
  alt: number;
  dir: number;
  speed: number;
  v_speed: number;
  squawk: string;
}

export interface IAirLabsRouteData {
  code: string;
  code3: string;
  name: string;
  population: number;
  continent: string;
  currency: string;
  names: {
    [key in EAirLabsLang]: string;
  };
}

export interface IAirLabsCountryData {
  code: string;
  code3: string;
  name: string;
  population: number;
  continent: string;
  currency: string;
  names: {
    [key in EAirLabsLang]: string;
  };
}
