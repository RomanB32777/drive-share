import { Carousel as AntdCarousel, CarouselProps } from "antd";
import { CarouselRef } from "antd/es/carousel";
import classNames from "classnames";
import { FC, forwardRef } from "react";

import { ArrowIcon } from "../../assets/icons";

import styles from "./Carousel.module.scss";

type TArrowStyles = "dark" | "transparent";
type TArrowPositions = "inside" | "outside";

interface ICarouselArrow {
	arrowStyle?: TArrowStyles;
}

interface ICarousel extends CarouselProps, ICarouselArrow {
	arrowsPosition?: TArrowPositions;
}

const arrowStyleClasses: Record<TArrowStyles, string> = {
	dark: styles.darkArrow,
	transparent: styles.transparentArrow,
};

const arrowPositionClasses: Record<TArrowPositions, string> = {
	inside: styles.insideArrows,
	outside: styles.outsideArrows,
};

const CarouselArrow: FC<ICarouselArrow> = ({ arrowStyle = "dark" }) => (
	<div className={classNames(styles.arrow, arrowStyleClasses[arrowStyle])}>
		<ArrowIcon />
	</div>
);

export const Carousel = forwardRef<CarouselRef, ICarousel>(
	({ children, arrowStyle, arrowsPosition = "inside", ...props }, ref) => (
		<AntdCarousel
			ref={ref}
			rootClassName={classNames(styles.carousel, arrowPositionClasses[arrowsPosition])}
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
