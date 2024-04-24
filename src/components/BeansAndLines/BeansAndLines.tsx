import styles from './styles.module.scss';

const BeansAndLines = () => {
	return (
		<div className={styles.root}>
			<div className={styles.line}/>
			<img src='/icons/coffee-beans-small-black.svg' alt='' className={styles.beans}/>
			<div className={styles.line}/>
		</div>
	);
};

export default BeansAndLines;
