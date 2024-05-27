import { FC } from "react";
import { Link, Outlet, generatePath } from "react-router-dom";

import { CarCard, selectCars, useFetchCarsQuery } from "entities/car";
import { selectViewer } from "entities/viewer";
import { PlusIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector } from "shared/lib/hooks";
import { Button, ContentLayout } from "shared/ui";

import styles from "./Cars.module.scss";

export const Cars: FC = () => {
	const { childRoutes } = pathRoutes.profile;

	const viewer = useAppSelector(selectViewer);

	const items = useAppSelector(selectCars);

	const { isLoading } = useFetchCarsQuery({ userId: viewer.id });

	// TODO не работает типизация
	const addFormPath = generatePath(childRoutes?.cars?.childRoutes?.carForm?.path || "", {
		type: "add",
	});

	return (
		<>
			<div className={styles.head}>
				<Link to={addFormPath}>
					<Button style="outlinePrimary" modificator={styles.button}>
						<>
							<PlusIcon />
							Добавить автомобиль
						</>
					</Button>
				</Link>
			</div>

			<Outlet />

			<ContentLayout isLoading={isLoading} modificator={styles.wrapper} isPageContent>
				<div className={styles.cards}>
					{items?.map((item) => <CarCard key={item.id} {...item} />)}
				</div>
			</ContentLayout>
		</>
	);
};
