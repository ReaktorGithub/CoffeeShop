import styles from './styles.module.scss';
import {FC} from "react";
import BeansAndLines from "../BeansAndLines";
import NavigationLinks from "../NavigationLinks";

const Footer: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.linkBox}>
				<img src='/icons/coffee-beans-black.svg' alt='' className={styles.coffee}/>
				<NavigationLinks />
			</div>
			<BeansAndLines />
		</div>
	);
};

export default Footer;

