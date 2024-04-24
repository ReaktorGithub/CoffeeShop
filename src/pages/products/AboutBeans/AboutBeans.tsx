import styles from './styles.module.scss';
import BeansAndLines from "../../../components/BeansAndLines";

const AboutBeans = () => {
	return (
		<div className={styles.root}>
			<div className={styles.aboutBox}>
				<img className={styles.image} src='/images/landing/girl.jpg' alt=''/>
				<div className={styles.secondColumnBox}>
					<h2 className={styles.textHeading}>About our beans</h2>
					<div className={styles.beansAndLinesBox}>
						<BeansAndLines />
					</div>
					<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
					<br />
					<p>
						Afraid at highly months do things on at. Situation recommend objection do intention so questions.
						<br />
						As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
					</p>
				</div>
			</div>
			<div className={styles.line}/>
		</div>
	);
};

export default AboutBeans;
