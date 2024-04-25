import styles from './styles.module.scss';
import {FC} from "react";

const BeansAndLines: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.line}/>
			<img src='/icons/coffee-beans-small-black.svg' alt='' className={styles.beans}/>
			<div className={styles.line}/>
		</div>
	);
};

export default BeansAndLines;
