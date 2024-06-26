import styles from './styles.module.scss';
import ButtonTransparent from "../../../ui/ButtonTransparent";
import {useNavigate} from 'react-router-dom';
import {FC} from "react";

const Offer: FC = () => {
	const navigate  = useNavigate();

	const handleClickMore = () => {
		navigate('/products', { replace: true });
	}

	return (
		<div
			className={styles.root}
			style={{ backgroundImage: 'url(/images/landing/background-1.png)' }}
		>
			<h1 className={styles.textHeading}>Everything You Love About Coffee</h1>
			<div className={styles.decorationBox}>
				<div className={styles.line}/>
				<img src='/icons/coffee-beans-small.svg' alt='' className={styles.beans}/>
				<div className={styles.line}/>
			</div>
			<p className={styles.textRegular}>We makes every day full of energy and taste</p>
			<p className={styles.textRegular}>Want to try our beans?</p>
			<div className={styles.buttonBox}>
				<ButtonTransparent text='More' onClick={handleClickMore}/>
			</div>
		</div>
	);
};

export default Offer;

