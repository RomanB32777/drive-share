import { FC } from "react";

import { Carousel as AntdCarousel, CarouselProps } from "antd";
import { ArrowIcon } from "shared/assets/icons";

import styles from "./Carousel.module.scss";

const CarouselArrow = () => (
	<div className={styles.arrow}>
		<ArrowIcon />
	</div>
);

export const Carousel: FC<CarouselProps> = ({ children, ...props }) => (
	<AntdCarousel
		rootClassName={styles.carousel}
		nextArrow={
			<div>
				<CarouselArrow />
			</div>
		}
		prevArrow={
			<div>
				<CarouselArrow />
			</div>
		}
		arrows
		{...props}
	>
		{children}
	</AntdCarousel>
);
