export type AirLabsNearbyAirportType = {
  /**
   * Geo location Latitude.
   *
   * Example : -6.1744
   *
   * @type {number}
   */
  lat: number;

  /**
   * Geo location Latitude.
   *
   * Example : 106.8294
   *
   * @type {number}
   */
  lng: number;

  /**
   * Distance from required Geo location (km)
   *
   * Example : 106.8294
   *
   * @type {number}
   */
  distance: number;

  /**
   * 2 letter language code
   *
   * @type {string}
   */
  lang?: string;

  /**
   * Fields to return (comma separated, e.g.: lat,lng,distance,lang)
   *
   * Example : "lat,lng,distance,lang"
   *
   * @type {string}
   */
  _fields?: string;
};
