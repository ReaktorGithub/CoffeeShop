import styles from './styles.module.scss';
import {FC} from "react";

const Header: FC = () => {
	return (
		<div className={styles.root}>
			<img src='/icons/coffee-beans.svg' alt='' className={styles.coffee}/>
			<a href='/' className={styles.link}>Coffee house</a>
			<a href='/' className={styles.link}>Our coffee</a>
			<a href='/' className={styles.link}>For your pleasure</a>
		</div>
	);
};

export default Header;

