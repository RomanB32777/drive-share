import { FC } from "react";

import { CarsGrid } from "features/cars-grid";
import { selectCars, useFetchFavoritesCarsQuery } from "entities/car";
import { selectViewer } from "entities/viewer";
import { useAppSelector } from "shared/lib/hooks";

import styles from "./Favorites.module.scss";

export const Favorites: FC = () => {
	const viewer = useAppSelector(selectViewer);

	const items = useAppSelector(selectCars);

	const { isLoading } = useFetchFavoritesCarsQuery({ userId: viewer.id });

	return (
		<>
			<h3 className={styles.title}>Избранное</h3>

			<CarsGrid
				items={items}
				isLoading={isLoading}
				cardProps={{ modificator: styles.card, isWithBadge: true }}
			/>
		</>
	);
};
