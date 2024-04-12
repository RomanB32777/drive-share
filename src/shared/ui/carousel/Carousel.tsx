import { Carousel as AntdCarousel, CarouselProps } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { FC, forwardRef } from "react";

import { ArrowIcon } from "../../assets/icons";

import styles from "./Carousel.module.scss";

const CarouselArrow: FC = () => (
	<div className={styles.arrow}>
		<ArrowIcon />
	</div>
);

export const Carousel = forwardRef<CarouselRef, CarouselProps>(({ children, ...props }, ref) => (
	<AntdCarousel
		ref={ref}
		rootClassName={styles.carousel}
		nextArrow={
			props.nextArrow || (
				<div>
					<CarouselArrow />
				</div>
			)
		}
		prevArrow={
			props.prevArrow || (
				<div>
					<CarouselArrow />
				</div>
			)
		}
		arrows
		{...props}
	>
		{children}
	</AntdCarousel>
));

Carousel.displayName = "Carousel";
