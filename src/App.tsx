import styles from './App.module.scss';
import {FC, useEffect} from "react";
import useAppDispatch from "./hooks/useAppDispatch";
import {loadConfig} from "./store/appSlice";
import useAppSelector from "./hooks/useAppSelector";
import LandingPage from "./pages/landing";
import ProductsPage from "./pages/products";

const App: FC = () => {
  const page = useAppSelector((state) => state.app.page);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadConfig());
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'products': return <ProductsPage />;
      case 'product': return <p>products</p>;
      default: return <LandingPage />;
    }
  }

  return (
    <main className={styles.root}>
      {renderPage()}
    </main>
  );
}

export default App;
