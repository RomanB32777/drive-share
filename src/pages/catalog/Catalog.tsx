import { FC } from "react";

import { useFetchCarsQuery } from "providers/store/models";
import { ContentLayout } from "shared/components";
import { useAppSelector } from "shared/hooks";
import { IComponentWithModificator } from "shared/interfaces";

import styles from "./Catalog.module.scss";
import { Card, CatalogFilter } from "./components";

export const CatalogPage: FC<IComponentWithModificator> = ({ modificator }) => {
	const { items } = useAppSelector(({ cars }) => cars);

	const { isLoading } = useFetchCarsQuery({});

	return (
		<div className={styles.catalog}>
			<div className={modificator}>
				<CatalogFilter />

				<ContentLayout isLoading={isLoading}>
					<div className={styles.items}>
						{items.map((item) => (
							<Card key={item.id} {...item} />
						))}
					</div>
				</ContentLayout>
			</div>
		</div>
	);
};
