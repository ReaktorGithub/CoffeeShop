import {FC} from "react";
import OurCoffee from "./OurCoffee";
import AboutBeans from "./AboutBeans";
import ProductListLayout from "./ProductListLayout";

const ProductsPage: FC = () => {
  return (
    <>
      <OurCoffee />
      <AboutBeans />
      <ProductListLayout />
    </>
  );
};

export default ProductsPage;