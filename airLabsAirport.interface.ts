export interface IAirLabsNearByAirport {
  airports: IAirLabsAirport[];
  cities: IAirLabsCity[];
}

export interface IAirLabsAirport {
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
  distance: number;
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
  distance: number;
}
