import { Carousel as AntdCarousel, CarouselProps } from "antd";
import { CarouselRef } from "antd/es/carousel";
import classNames from "classnames";
import { FC, forwardRef } from "react";

import { ArrowIcon } from "../../assets/icons";

import styles from "./Carousel.module.scss";

type TArrowStyles = "dark" | "transparent";

interface ICarouselArrow {
	arrowStyle?: TArrowStyles;
}

type TCarousel = CarouselProps & ICarouselArrow;

const arrowStyleClasses: Record<TArrowStyles, string> = {
	dark: styles.darkArrow,
	transparent: styles.transparentArrow,
};

const CarouselArrow: FC<ICarouselArrow> = ({ arrowStyle = "dark" }) => (
	<div className={classNames(styles.arrow, arrowStyleClasses[arrowStyle])}>
		<ArrowIcon />
	</div>
);

export const Carousel = forwardRef<CarouselRef, TCarousel>(
	({ children, arrowStyle, ...props }, ref) => (
		<AntdCarousel
			ref={ref}
			rootClassName={styles.carousel}
			nextArrow={
				props.nextArrow || (
					<div>
						<CarouselArrow arrowStyle={arrowStyle} />
					</div>
				)
			}
			prevArrow={
				props.prevArrow || (
					<div>
						<CarouselArrow arrowStyle={arrowStyle} />
					</div>
				)
			}
			arrows
			{...props}
		>
			{children}
		</AntdCarousel>
	)
);

Carousel.displayName = "Carousel";
