import styles from './styles.module.scss';
import CustomInput from "../../ui/CustomInput";
import {FC} from "react";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import {setSearch, setSelectedCountryId} from "../../store/appSlice";
import FilterButton from "../../ui/FilterButton";

const ProductSearchBar: FC = () => {
	const search = useAppSelector((state) => state.app.search);
	const countriesList = useAppSelector((state) => state.app.countriesList);
	const selectedCountryIds = useAppSelector((state) => state.app.selectedCountryIds);

	const dispatch = useAppDispatch();

	const handleChangeSearch = (value: string) => {
		dispatch(setSearch(value));
	}

	const handleChangeFilter = (id: string) => {
		dispatch(setSelectedCountryId(id));
	}

	return (
		<div className={styles.root}>
			<div className={styles.filterBox}>
				<p className={styles.textLabel}>Looking for</p>
				<div className={styles.searchInputBox}>
					<CustomInput
						value={search}
						onChange={handleChangeSearch}
					/>
				</div>
			</div>
			<div className={styles.filterBox}>
				<p className={styles.textLabel}>Or filter</p>
				<div className={styles.filterButtonsBox}>
					{
						countriesList.map((country) => <FilterButton
							key={country._id}
							text={country.displayName}
							onClick={() => handleChangeFilter(country._id)}
							active={selectedCountryIds.includes(country._id)}
						/>)
					}
				</div>
			</div>
		</div>
	);
};

export default ProductSearchBar;
