import { EntityCarousel } from "features/entity-carousel";
import { CategoryCard, useFetchCategoriesQuery } from "entities/car";
import { breakpoints } from "shared/const";

import styles from "./CategoriesCarousel.module.scss";

export const CategoriesCarousel = () => {
	const { data = [], isLoading } = useFetchCategoriesQuery();

	return (
		<EntityCarousel
			items={data}
			isLoading={isLoading}
			title="Машины для любых нужд"
			modificator={styles.carousel}
			slidesPerRow={5}
			responsive={[
				{
					breakpoint: breakpoints.sm,
					settings: {
						slidesPerRow: 1,
					},
				},
				{
					breakpoint: breakpoints.md,
					settings: {
						slidesPerRow: 2,
					},
				},
				{
					breakpoint: breakpoints.lg,
					settings: {
						slidesPerRow: 3,
					},
				},
			]}
			renderItem={(item) => <CategoryCard {...item} />}
		/>
	);
};
