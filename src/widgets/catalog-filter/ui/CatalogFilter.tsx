import classNames from "classnames";
import { FC } from "react";

import { PeriodForm } from "features/period-form";
import { TPeriodFilterValues } from "entities/car";
import { SearchIcon } from "shared/assets/icons";
import { IComponentWithModificator } from "shared/interfaces";

import styles from "./CatalogFilter.module.scss";

interface ICatalogFilter extends IComponentWithModificator {
	isLoading?: boolean;
	defaultValues?: TPeriodFilterValues;
	onSubmit: (values: TPeriodFilterValues) => Promise<unknown> | void;
}

export const CatalogFilter: FC<ICatalogFilter> = ({ isLoading, modificator, ...props }) => {
	return (
		<PeriodForm
			classes={{
				form: classNames(styles.filter, modificator),
				itemsWrapper: styles.items,
				item: styles.item,
				select: styles.select,
				button: styles.button,
			}}
			disabled={isLoading}
			buttonContent={
				<>
					<SearchIcon modificator={styles.buttonIcon} />
					<span className={styles.buttonText}>Найти автомобиль</span>
				</>
			}
			{...props}
		/>
	);
};
