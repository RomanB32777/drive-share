import { FC } from "react";

import { useAppSelector } from "shared/hooks";

import styles from "./Catalog.module.scss";
import { Card, PeriodFilter } from "./components";

export const CatalogPage: FC = () => {
	const { cars } = useAppSelector(({ catalog }) => catalog);

	return (
		<>
			<PeriodFilter />

			<div className={styles.items}>
				{cars.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</>
	);
};
