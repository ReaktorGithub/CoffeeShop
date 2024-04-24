import styles from './styles.module.scss';
import {FC} from "react";
import useAppSelector from "../../../hooks/useAppSelector";
import {featuredProductsSelector} from "../../../store/selectors";
import ProductCardFeatured from "../../../components/ProductCardFeatured";

const OurBest: FC = () => {
	const featuredProducts = useAppSelector(featuredProductsSelector);

	return (
		<div
			className={styles.root}
			style={{ backgroundImage: 'url(/images/landing/background-2.png)' }}
		>
			<h2 className={styles.textHeading}>Our best</h2>
			<div className={styles.picturesBox}>
				{
					featuredProducts.map((product) => <ProductCardFeatured
						key={product._id}
						imgUrn={product.imgSrc}
						name={product.displayName}
						price={product.displayPrice}
					/>)
				}
			</div>
		</div>
	);
};

export default OurBest;

