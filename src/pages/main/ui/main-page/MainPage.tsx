import classNames from "classnames";
import { stringify } from "qs";
import { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { CatalogFilter } from "widgets/catalog-filter";
import { CategoriesCarousel } from "widgets/categories-carousel";
import { RecommendedCarousel } from "widgets/recommended-carousel";
import bannerImage from "shared/assets/images/banner.png";
import { pathRoutes } from "shared/config/routing";
import { breakpoints } from "shared/const";
import { IComponentWithModificator, IPeriodFilterValues } from "shared/interfaces";
import { usePageTitle } from "shared/lib/hooks";

import { MainPromo } from "../main-promo";

import styles from "./MainPage.module.scss";

export const MainPage: FC<IComponentWithModificator> = ({ modificator }) => {
	const navigate = useNavigate();

	usePageTitle(pathRoutes.main.title);

	const handleFilterSubmit = (values: IPeriodFilterValues) => {
		const catalogLink = generatePath(pathRoutes.catalog.path);

		navigate({ pathname: catalogLink, search: stringify(values) });
	};

	return (
		<div>
			<div className={styles.banner}>
				<img className={styles.bannerImage} src={bannerImage} alt="background" />

				<div className={classNames(styles.bannerContent, modificator)}>
					<CatalogFilter modificator={styles.filter} onSubmit={handleFilterSubmit} />
				</div>
			</div>

			<div className={classNames(styles.titleWrapper, modificator)}>
				<h1 className={styles.title}>Арендуйте автомобиль</h1>
				<h3 className={styles.subtitle}>в несколько кликов</h3>
			</div>

			<div className={styles.content}>
				<div className={modificator}>
					<CategoriesCarousel />

					<RecommendedCarousel
						responsive={[
							{
								breakpoint: breakpoints.sm,
								settings: {
									slidesPerRow: 1,
								},
							},
							{
								breakpoint: breakpoints.lg,
								settings: {
									slidesPerRow: 2,
								},
							},
						]}
					/>

					<MainPromo />
				</div>
			</div>
		</div>
	);
};
