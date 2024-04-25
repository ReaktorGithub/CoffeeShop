import styles from './styles.module.scss';
import {LINK_LIST} from "../../db/links";
import {Link} from "react-router-dom";
import {FC} from "react";

interface IProps {
	textColor?: string;
}

const NavigationLinks: FC<IProps> = ({ textColor = '#000' }) => {
	return (
		<nav className={styles.root}>
			{
				LINK_LIST.map((item) => <Link
					key={item._id}
					to={item.path}
					className={styles.link}
					style={{
						color: textColor,
					}}
				>
					{item.text}
				</Link>)
			}
		</nav>
	);
};

export default NavigationLinks;
