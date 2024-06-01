import { Rate, RateProps } from "antd";
import classNames from "classnames";
import { AriaAttributes, forwardRef } from "react";

import { StarIcon } from "../../../../assets/icons";

import styles from "./Rating.module.scss";

const STARS_NUMBER = 5;

type TStarSizes = "small" | "big";

export interface IRating extends RateProps, AriaAttributes {
	isRenderNum?: boolean;
	size?: TStarSizes;
}

const sizeStyles: Record<TStarSizes, string> = {
	small: styles.small,
	big: styles.big,
};

export const Rating = forwardRef<HTMLDivElement, IRating>(
	({ value = 0, isRenderNum, disabled = true, size = "small", ...props }, ref) => (
		<div className={styles.rating}>
			{isRenderNum && <span className={styles.value}>{value}</span>}

			<Rate
				{...props}
				ref={ref}
				value={value}
				count={STARS_NUMBER}
				className={classNames(styles.stars, sizeStyles[size])}
				character={<StarIcon />}
				disabled={disabled}
			/>
		</div>
	)
);

Rating.displayName = "Rating";
