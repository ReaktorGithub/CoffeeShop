import styles from './styles.module.scss';
import useAppSelector from "../../../hooks/useAppSelector";
import BeansAndLines from "../../../components/BeansAndLines";
import {useParams} from "react-router-dom";
import {FC} from "react";

const ProductDetails: FC = () => {
	const { id } = useParams();

	const products = useAppSelector((state) => state.app.productsList);
	const countries = useAppSelector((state) => state.app.countriesList);
	const product = products.find((item) => item._id === id);
	const country = countries.find((item) => item._id === product?.originCountryId)?.displayName || '';

	return (
		<div className={styles.root}>
			{
				product ? (<>
					<div className={styles.imageBox} style={{ backgroundImage: `url(${product.imgDetailedSrc})`}}/>
					<div className={styles.secondColumn}>
						<div className={styles.headingBox}>
							<h2 className={styles.textHeading}>About it</h2>
							<BeansAndLines />
						</div>
						<div className={styles.descriptionBox}>
							<p><span className={styles.textSpan}>Country:&nbsp;</span>{country}</p>
							<p><span className={styles.textSpan}>Description:&nbsp;</span>{product.description}</p>
							<p className={styles.textPrice}><span className={styles.textSpan}>Price:&nbsp;&nbsp;&nbsp;</span>{product.displayPrice}</p>
						</div>
					</div>
				</>) :
					null
			}
		</div>
	);
};

export default ProductDetails;
