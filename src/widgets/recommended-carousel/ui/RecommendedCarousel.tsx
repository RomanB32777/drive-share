import { CarouselProps } from "antd";
import { FC } from "react";

import { EntityCarousel } from "features/entity-carousel";
import { CarCard, selectCars, useFetchCarsQuery } from "entities/car";
import { useAppSelector } from "shared/lib/hooks";

const RECOMMENDED_AUTO_NUMBER = 3;

interface IRecommendedCarousel extends Pick<CarouselProps, "slidesPerRow" | "responsive"> {
	title?: string;
}

export const RecommendedCarousel: FC<IRecommendedCarousel> = ({
	title = "Новые предложения в каталоге",
	...props
}) => {
	const cars = useAppSelector(selectCars);

	const { isLoading } = useFetchCarsQuery({ size: RECOMMENDED_AUTO_NUMBER });

	return (
		<EntityCarousel
			items={cars}
			isLoading={isLoading}
			title={title}
			renderItem={(item) => <CarCard {...item} />}
			{...props}
		/>
	);
};
