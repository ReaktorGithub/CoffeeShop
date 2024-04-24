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

export type TPage = 'landing' | 'products' | 'product';

export interface IAppInitialState {
  loading: boolean;
  page: TPage;
  countriesList: ICountry[];
  productsList: IProduct[];
  search: string;
  selectedCountryId: string | null;
  selectedProductId: string | null;
}
