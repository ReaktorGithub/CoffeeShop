import styles from './styles.module.scss';
import useAppSelector from "../../hooks/useAppSelector";
import ProductCard from "../ProductCard";
import {filteredProductsSelector} from "../../store/selectors";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

const ProductList: FC = () => {
	const filteredProducts = useAppSelector(filteredProductsSelector);

	const navigate  = useNavigate();

	const handleCardClick = (id: string) => {
		navigate(`/products/${id}`, { replace: true });
	}

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
						onClick={() => handleCardClick(product._id)}
					/>) :
					<p className={styles.noResultsText}>No results</p>
			}
		</div>
	);
};

export default ProductList;
