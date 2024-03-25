import { FC, useMemo } from "react";

import { StarIcon } from "shared/assets/icons";
import { useAppSelector } from "shared/hooks";

import styles from "./Rating.module.scss";

const STARS_NUMBER = 5;

export const Rating: FC = () => {
	const {
		car: { rating },
	} = useAppSelector(({ cars }) => cars);

	const ratingStars = useMemo(() => {
		const stars = [];

		const emptyStars = STARS_NUMBER - rating;

		for (let i = 0; i < rating; i++) {
			stars.push(<StarIcon modificator={styles.activeStar} />);
		}

		for (let i = 0; i < emptyStars; i++) {
			stars.push(<StarIcon />);
		}

		return stars;
	}, [rating]);

	return (
		<div className={styles.row}>
			<div className={styles.rating}>
				<span className={styles.ratingValue}>{rating}</span>
				<div className={styles.stars}>{ratingStars}</div>
			</div>
			<span className={styles.reviews}>11 отзывов</span>
		</div>
	);
};
