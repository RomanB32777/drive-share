import { FC } from "react";

import { ICar } from "providers/store/models";
import { generatePath, Link } from "react-router-dom";
import { pathRoutes } from "shared/constants";

import styles from "./Card.module.scss";

export const Card: FC<ICar> = ({ id, model, photo, price }) => {
	const pageLink = generatePath(pathRoutes.car.path, { id });

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Link to={pageLink}>
					<img src={photo} alt={model} />
				</Link>
			</div>
			<div className={styles.content}>
				<Link className={styles.link} to={pageLink}>
					<h4 className={styles.title}>{model}</h4>
				</Link>

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
