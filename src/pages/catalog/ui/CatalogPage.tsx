import { FC } from "react";
import { useSearchParams } from "react-router-dom";

import { CatalogFilter } from "widgets/catalog-filter";
import { CarCard, selectCars, useFetchCarsQuery, useLazyFetchCarsQuery } from "entities/car";
import { pathRoutes } from "shared/config/routing";
import { IComponentWithModificator, IPeriodFilterValues } from "shared/interfaces";
import { useAppSelector, usePageTitle } from "shared/lib/hooks";
import { ContentLayout } from "shared/ui";

import styles from "./CatalogPage.module.scss";

export const CatalogPage: FC<IComponentWithModificator> = ({ modificator }) => {
	const [searchParams] = useSearchParams();

	const items = useAppSelector(selectCars);

	const defaultValues: IPeriodFilterValues = {
		city: searchParams.get("city") || undefined,
		from: searchParams.get("from") || undefined,
		to: searchParams.get("to") || undefined,
	} as IPeriodFilterValues; // TODO without as

	const { isLoading } = useFetchCarsQuery(defaultValues);

	const [fetchCars, { isLoading: isCatalogLoading }] = useLazyFetchCarsQuery();

	usePageTitle(pathRoutes.catalog.title);

	return (
		<div className={styles.catalog}>
			<div className={modificator}>
				<CatalogFilter
					defaultValues={
						Object.values(defaultValues).every((param) => !param) ? undefined : defaultValues
					}
					isLoading={isCatalogLoading}
					onSubmit={fetchCars}
				/>

				<ContentLayout isLoading={isLoading}>
					<div className={styles.cards}>
						{items?.map((item) => <CarCard key={item.id} {...item} />)}
					</div>
				</ContentLayout>
			</div>
		</div>
	);
};
