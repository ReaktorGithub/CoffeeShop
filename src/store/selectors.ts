import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {IProduct, IProductDisplay} from "./types";

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

export const filteredProductsSelector = createSelector(
  (state: RootState) => ({
    products: state.app.productsList,
    countries: state.app.countriesList,
    search: state.app.search,
    filterBy: state.app.selectedCountryId,
  }),
  (data): IProductDisplay[] => {
    const { products, filterBy, search, countries} = data;

    const searchString = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const isFilter = filterBy ? product.originCountryId === filterBy : true;
      return product.displayName.toLowerCase().includes(searchString) && isFilter;
    });

    return filtered.map((product) => ({
      _id: product._id,
      name: product.displayName,
      price: product.displayPrice,
      imgSrc: product.imgSrc,
      country: countries.find((country) => country._id === product.originCountryId)?.displayName || 'N/A',
    }));
  }
)