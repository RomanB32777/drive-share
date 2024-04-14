import { FC, useMemo } from "react";

import { ICarCategory } from "../../model/types";

import styles from "./CategoryCard.module.scss";

export const CategoryCard: FC<ICarCategory> = ({ name, photo, minPrice, maxPrice }) => {
	const priceContent = useMemo(() => {
		if (minPrice && maxPrice) {
			return `${minPrice} ₽ - ${maxPrice} ₽`;
		}

		return `От ${minPrice || 0} ₽`;
	}, [minPrice, maxPrice]);

	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<h4 className={styles.title}>{name}</h4>

				<p className={styles.price}>{priceContent}</p>
			</div>

			<div className={styles.image}>
				<img src={photo} alt={name} />
			</div>
		</div>
	);
};