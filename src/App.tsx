import styles from './App.module.scss';
import {FC, useEffect} from "react";
import useAppDispatch from "./hooks/useAppDispatch";
import {loadConfig} from "./store/appSlice";
import LandingPage from "./pages/landing";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/product";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadConfig());
  }, []);

  return (
    <main className={styles.root}>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/products/:id' element={<ProductPage />}/>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
