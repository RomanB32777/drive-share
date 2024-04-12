import { FC } from "react";
import { Link, generatePath } from "react-router-dom";

import { pathRoutes } from "shared/const";

import { ICar } from "../../model/types";

import styles from "./CarCard.module.scss";

export const CarCard: FC<ICar> = ({ id, model, photo, price }) => {
	const pageLink = generatePath(pathRoutes.car.path, { id });

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Link to={pageLink}>
					<img src={photo} alt={model} />
				</Link>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>
					<Link className={styles.link} to={pageLink}>
						{model}
					</Link>
				</h4>

				<div className={styles.info}>
					<p className={styles.price}>
						{price} ₽ <span>/ сутки</span>
					</p>
					<div className={styles.badge}>New</div>
				</div>
			</div>
		</div>
	);
};
