import styles from './styles.module.scss';
import {FC} from "react";

interface IProps {
	text: string;
	onClick?: () => void;
}

const ButtonTransparent: FC<IProps> = ({ text, onClick = () => undefined }) => {
	return (
		<button
			className={styles.root}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default ButtonTransparent;

