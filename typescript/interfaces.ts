export interface ICategory {
  id: number;
  name: string;
}
export interface IMenu {
  name: string;
  href: string;
}
export interface IProducts {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  image: string;
  isNew: boolean;
  isSale: boolean;
}
export interface IPopularFlight {
  count: number;
  origin: {
    _id: string;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  destination: {
    _id: string;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  time: string;
}
export interface IFlightWayPoint {
  subType: string;
  name: string;
  code: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  address: {
    cityName: string;
    cityCode: string;
    countryName: string;
    countryCode: string;
    regionCode: string;
  };
}
