import styles from './styles.module.scss';
import {ChangeEvent, FC} from "react";

interface IProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const CustomInput: FC<IProps> = ({ value, placeholder = '', onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	}

	return (
		<div className={styles.root}>
			<input
				className={styles.input}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default CustomInput;
