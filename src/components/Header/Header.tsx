import styles from './styles.module.scss';
import {FC} from "react";
import NavigationLinks from "../NavigationLinks";

const Header: FC = () => {
	return (
		<div className={styles.root}>
			<img src='/icons/coffee-beans.svg' alt='' className={styles.coffee}/>
			<NavigationLinks textColor='#FFF'/>
		</div>
	);
};

export default Header;

