import {FC} from "react";
import OurCoffee from "./OurCoffee";
import AboutBeans from "./AboutBeans";
import ProductListLayout from "./ProductListLayout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductsPage: FC = () => {
  return (
    <>
      <Header />
      <OurCoffee />
      <AboutBeans />
      <ProductListLayout />
      <Footer />
    </>
  );
};

export default ProductsPage;