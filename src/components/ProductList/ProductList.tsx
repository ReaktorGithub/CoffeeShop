import styles from './styles.module.scss';
import useAppSelector from "../../hooks/useAppSelector";
import ProductCard from "../ProductCard";
import {filteredProductsSelector} from "../../store/selectors";

const ProductList = () => {
	const filteredProducts = useAppSelector(filteredProductsSelector);

	return (
		<div className={styles.root}>
			{
				filteredProducts.length ?
					filteredProducts.map((product) => <ProductCard
						key={product._id}
						imgUrn={product.imgSrc}
						name={product.name}
						country={product.country}
						price={product.price}
					/>) :
					<p className={styles.noResultsText}>No results</p>
			}
		</div>
	);
};

export default ProductList;
