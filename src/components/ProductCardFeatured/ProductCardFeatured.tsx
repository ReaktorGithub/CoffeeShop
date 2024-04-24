import styles from './styles.module.scss';
import {FC} from "react";

interface IProps {
	imgUrn: string;
	name: string;
	price: string;
}

const ProductCardFeatured: FC<IProps> = ({ imgUrn, name, price }) => {
	return (
		<div className={styles.root}>
			<div className={styles.imageBox} style={{ backgroundImage: `url(${imgUrn})`}}/>
			<p className={styles.textName}>{name}</p>
			<p className={styles.textPrice}>{price}</p>
		</div>
	);
};

export default ProductCardFeatured;
