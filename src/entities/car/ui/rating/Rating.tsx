import { Rate } from "antd";
import { FC } from "react";

import { StarIcon } from "shared/assets/icons";

import styles from "./Rating.module.scss";

const STARS_NUMBER = 5;

interface IRating {
	rating: number | undefined;
}

export const Rating: FC<IRating> = ({ rating = 4 }) => {
	return (
		<div className={styles.row}>
			<div className={styles.rating}>
				<span className={styles.ratingValue}>{rating}</span>
				<Rate
					value={rating}
					count={STARS_NUMBER}
					className={styles.stars}
					character={<StarIcon />}
					disabled
				/>
			</div>
			<span className={styles.reviews}>11 отзывов</span>
		</div>
	);
};
