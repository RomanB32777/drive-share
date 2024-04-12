import { CarouselProps } from "antd";
import { FC } from "react";

import { MainCarousel } from "features/main-carousel";
import { CarCard, useFetchCarsQuery } from "entities/car";

const RECOMMENDED_AUTO_NUMBER = 3;

interface IRecommendedCarousel extends Pick<CarouselProps, "slidesPerRow" | "responsive"> {
	title?: string;
}

export const RecommendedCarousel: FC<IRecommendedCarousel> = ({
	title = "Новые предложения в каталоге",
	...props
}) => {
	const { data = [], isLoading } = useFetchCarsQuery({ size: RECOMMENDED_AUTO_NUMBER });

	return (
		<MainCarousel
			items={data}
			isLoading={isLoading}
			title={title}
			renderItem={(item) => <CarCard {...item} />}
			{...props}
		/>
	);
};
