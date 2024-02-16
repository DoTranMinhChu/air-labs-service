export type AirLabsServiceConfigType = {
  apiKey: string;
  authToken?: string;
  baseUrl?: string;
};
export interface IAirLabsResponse<T> extends IAirLabsResponseBase {
  response: T;
}

export interface IAirLabsResponseBase {
  error?: IAirLabsErrorBase;
  request: IAirLabsRequest;
  terms: string;
}
export interface IAirLabsErrorBase {
  message: string;
  code: string;
}
export interface IAirLabsRequest {
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
  params: any;
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
