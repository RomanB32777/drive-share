import { FC } from "react";

import { CategoriesCarousel } from "widgets/categories-carousel";
import { RecommendedCarousel } from "widgets/recommended-carousel";
import { pathRoutes } from "shared/config/routing";
import { breakpoints } from "shared/const";
import { usePageTitle } from "shared/lib/hooks";

import { Banner } from "../banner";
import { Promo } from "../promo";

import styles from "./MainPage.module.scss";

export const MainPage: FC = () => {
	usePageTitle(pathRoutes.main.title);

	return (
		<div>
			<Banner />

			<div className={styles.titleWrapper}>
				<h1 className={styles.title}>Арендуйте автомобиль</h1>
				<h3 className={styles.subtitle}>в несколько кликов</h3>
			</div>

			<div className={styles.content}>
				<div className={styles.wrapper}>
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

					<Promo />
				</div>
			</div>
		</div>
	);
};
