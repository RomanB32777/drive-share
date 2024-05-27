import { CarouselProps } from "antd";
import { FC } from "react";

import { ICarIncome, IncomeCard } from "entities/car";
import { Carousel, ContentLayout } from "shared/ui";

import styles from "./IncomeCarousel.module.scss";

export interface IIncomeCarousel extends CarouselProps {
	items: ICarIncome[];
	isLoading?: boolean;
}

export const IncomeCarousel: FC<IIncomeCarousel> = ({
	items,
	isLoading,
	slidesPerRow = 1,
	...props
}) => (
	<ContentLayout isLoading={isLoading} modificator={styles.carouselWrapper}>
		<Carousel
			slidesPerRow={slidesPerRow}
			arrowStyle="transparent"
			arrowsPosition="outside"
			dots={false}
			{...props}
		>
			{items?.map((item) => (
				<div key={item.id}>
					<div className={styles.slide}>
						<IncomeCard {...item} />
					</div>
				</div>
			))}
		</Carousel>
	</ContentLayout>
);
