import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {ICountry, IProduct, IProductDisplay} from "./types";

export const featuredProductsSelector = createSelector(
  (state: RootState) => (state.app.productsList),
  (data): IProduct[] => {
    return [...data]
      .filter((product) => product.featuredOrder !== undefined)
      .sort((a, b) => {
      if (a.featuredOrder === undefined && b.featuredOrder === undefined) {
        return 0;
      } else if (a.featuredOrder === undefined) {
        return 1;
      } else if (b.featuredOrder === undefined) {
        return -1;
      } else {
        return a.featuredOrder - b.featuredOrder;
      }
    });
  }
);

const getCountryById = (countries: ICountry[], id: string): string => {
  return countries.find((country) => country._id === id)?.displayName || 'N/A';
}

export const filteredProductsSelector = createSelector(
  (state: RootState) => (state.app),
  (app): IProductDisplay[] => {
    const { productsList, search, countriesList, selectedCountryId} = app;

    const searchString = search.trim().toLowerCase();

    const filtered = productsList.filter((product) => {
      const isFilter = selectedCountryId ? product.originCountryId === selectedCountryId : true;
      return product.displayName.toLowerCase().includes(searchString) && isFilter;
    });

    return filtered.map((product) => ({
      _id: product._id,
      name: product.displayName,
      price: product.displayPrice,
      imgSrc: product.imgSrc,
      country: getCountryById(countriesList, product.originCountryId),
    }));
  }
);
