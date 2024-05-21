import { CarouselProps, CarouselRef } from "antd/es/carousel";
import { ReactNode, useRef } from "react";

import { ArrowIcon } from "shared/assets/icons";
import { IComponentWithModificator } from "shared/interfaces";
import { Button, Carousel, ContentLayout } from "shared/ui";

import styles from "./EntityCarousel.module.scss";

interface IBaseSlideData {
	id: string | number;
}

export interface IEntityCarousel<T extends IBaseSlideData>
	extends Omit<CarouselProps, "arrows">,
		IComponentWithModificator {
	items: T[];
	title: string;
	isLoading?: boolean;
	renderItem: (item: T) => ReactNode;
}

export const EntityCarousel = <T extends IBaseSlideData>({
	items,
	title,
	isLoading,
	slidesPerRow = 3,
	modificator,
	renderItem,
	...props
}: IEntityCarousel<T>) => {
	const sliderRef = useRef<CarouselRef>(null);

	const handlePrevClick = () => sliderRef.current?.prev();
	const handleNextClick = () => sliderRef.current?.next();

	return (
		<div className={modificator}>
			<div className={styles.head}>
				<h4 className={styles.title}>{title}</h4>

				{!!items.length && (
					<div className={styles.arrows}>
						<Button
							style="transparent"
							disabled={isLoading}
							modificator={styles.arrowLeft}
							onClick={handlePrevClick}
						>
							<ArrowIcon />
						</Button>

						<Button
							style="transparent"
							disabled={isLoading}
							modificator={styles.arrowRight}
							onClick={handleNextClick}
						>
							<ArrowIcon />
						</Button>
					</div>
				)}
			</div>

			<ContentLayout isLoading={isLoading} modificator={styles.carouselWrapper}>
				<Carousel
					ref={sliderRef}
					slidesPerRow={slidesPerRow}
					arrows={false}
					dots={false}
					{...props}
				>
					{items?.map((item) => (
						<div key={item.id}>
							<div className={styles.slide}>{renderItem(item)}</div>
						</div>
					))}
				</Carousel>
			</ContentLayout>
		</div>
	);
};
