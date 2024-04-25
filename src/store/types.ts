export interface ICountry {
  _id: string;
  displayName: string;
}

export interface IProduct {
  _id: string;
  displayName: string;
  displayPrice: string;
  originCountryId: string;
  imgSrc: string;
  imgDetailedSrc: string;
  description: string;
  featuredOrder?: number;
}

export interface IProductDisplay {
  _id: string;
  name: string;
  price: string;
  country: string;
  imgSrc: string;
}

export interface IConfig {
  countries: ICountry[];
  products: IProduct[];
}

export interface IAppInitialState {
  loading: boolean;
  countriesList: ICountry[];
  productsList: IProduct[];
  search: string;
  selectedCountryIds: string[];
}
