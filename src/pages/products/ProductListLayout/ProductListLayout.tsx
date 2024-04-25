import styles from './styles.module.scss';
import ProductSearchBar from "../../../components/ProductSearchBar";
import ProductList from "../../../components/ProductList";
import {FC} from "react";

const ProductListLayout: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.searchBarBox}>
				<ProductSearchBar />
			</div>
			<div className={styles.productListBox}>
				<ProductList />
			</div>
		</div>
	);
};

export default ProductListLayout;
