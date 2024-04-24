import styles from './styles.module.scss';
import {FC} from "react";
import cn from 'classnames';

type TVariant = 'left' | 'center' | 'right';

interface IProps {
	text: string;
	variant?: TVariant;
	onClick: () => void;
	active: boolean;
}

const FilterButton: FC<IProps> = ({ text, variant, onClick, active }) => {
	return (
		<button
			className={cn(
				styles.root,
				{[styles.leftVariant]: variant === 'left'},
				{[styles.centerVariant]: variant === 'center'},
				{[styles.rightVariant]: variant === 'right'},
				{[styles.active]: active},
			)}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default FilterButton;
