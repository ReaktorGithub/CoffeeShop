import Offer from "./Offer";
import AboutUs from "./AboutUs";
import OurBest from "./OurBest";
import {FC} from "react";

const LandingPage: FC = () => {
  return (
    <>
      <Offer />
      <AboutUs />
      <OurBest />
    </>
  );
};

export default LandingPage;