import { useLazyFetchCarsQuery } from "providers/store/models";
import { SearchIcon } from "shared/assets/icons";
import { PeriodForm } from "shared/components";

import styles from "./CatalogFilter.module.scss";

export const CatalogFilter = () => {
	const [fetchCars, { isLoading }] = useLazyFetchCarsQuery();

	return (
		<PeriodForm
			classes={{
				form: styles.filter,
				itemsWrapper: styles.items,
				items: styles.item,
				select: styles.select,
				button: styles.button,
			}}
			onSubmit={fetchCars}
			disabled={isLoading}
			buttonContent={<SearchIcon />}
		/>
	);
};
