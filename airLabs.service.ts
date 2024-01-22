import { AirLabsServiceConfigType } from "./airLabs.type";
import { AirLabsAirportService } from "./airLabsAirport.service";
import { AirLabsDataService } from "./airLabsData.service";
import { AirLabsFlightService } from "./airLabsFlight.service";

export class AirLabsService {
  airLabsServiceConfig: AirLabsServiceConfigType;
  constructor(airLabsServiceConfig: AirLabsServiceConfigType) {
    if (!airLabsServiceConfig.baseUrl)
      airLabsServiceConfig.baseUrl = "https://airlabs.co";
    this.airLabsServiceConfig = airLabsServiceConfig;
  }

  get flight() {
    return new AirLabsFlightService(this.airLabsServiceConfig);
  }

  get airport() {
    return new AirLabsAirportService(this.airLabsServiceConfig);
  }

  get data() {
    return new AirLabsDataService(this.airLabsServiceConfig);
  }
}
