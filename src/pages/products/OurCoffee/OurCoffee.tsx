import styles from './styles.module.scss';
import {FC} from "react";

const OurCoffee: FC = () => {
	return (
		<div
			className={styles.root}
			style={{ backgroundImage: 'url(/images/landing/background-3.png)' }}
		>
			<h1 className={styles.textHeading}>Our Coffee</h1>
		</div>
	);
};

export default OurCoffee;
