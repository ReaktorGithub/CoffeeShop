import styles from './styles.module.scss';
import {FC} from "react";
import BeansAndLines from "../BeansAndLines";

const Footer: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.linkBox}>
				<img src='/icons/coffee-beans-black.svg' alt='' className={styles.coffee}/>
				<a href='/' className={styles.link}>Coffee house</a>
				<a href='/' className={styles.link}>Our coffee</a>
				<a href='/' className={styles.link}>For your pleasure</a>
			</div>
			<BeansAndLines />
		</div>
	);
};

export default Footer;

