import { FC } from "react";

import { getPluralNoun } from "shared/lib/string";
import { Rating } from "shared/ui";

import styles from "./CarRating.module.scss";

interface ICarRating {
	rating: number | undefined;
	reviewsCount: number;
}

export const CarRating: FC<ICarRating> = ({ rating, reviewsCount }) => {
	return (
		<div className={styles.row}>
			<Rating value={rating} isRenderNum />

			<span className={styles.reviews}>
				{reviewsCount} {getPluralNoun("отзыв_отзыва_отзывов", reviewsCount)}
			</span>
		</div>
	);
};
