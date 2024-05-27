import { FC } from "react";
import { useSearchParams } from "react-router-dom";

import { CatalogFilter } from "widgets/catalog-filter";
import {
	CarCard,
	TPeriodFilterValues,
	selectCars,
	useFetchCarsQuery,
	useLazyFetchCarsQuery,
} from "entities/car";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector, usePageTitle } from "shared/lib/hooks";
import { ContentLayout } from "shared/ui";

import styles from "./CatalogPage.module.scss";

export const CatalogPage: FC = () => {
	const [searchParams] = useSearchParams();

	const items = useAppSelector(selectCars);

	const defaultValues: TPeriodFilterValues = {
		city: searchParams.get("city") || undefined,
		from: searchParams.get("from") || undefined,
		to: searchParams.get("to") || undefined,
	} as TPeriodFilterValues; // TODO without as

	const { isLoading } = useFetchCarsQuery(defaultValues);

	const [fetchCars, { isLoading: isCatalogLoading }] = useLazyFetchCarsQuery();

	usePageTitle(pathRoutes.catalog.title);

	return (
		<div className={styles.catalog}>
			<div className={styles.wrapper}>
				<CatalogFilter
					defaultValues={
						Object.values(defaultValues).every((param) => !param) ? undefined : defaultValues
					}
					isLoading={isCatalogLoading}
					onSubmit={fetchCars}
				/>

				<ContentLayout isLoading={isLoading} isPageContent>
					<div className={styles.cards}>
						{items?.map((item) => <CarCard key={item.id} {...item} />)}
					</div>
				</ContentLayout>
			</div>
		</div>
	);
};
