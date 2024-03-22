import { FC } from "react";

import { ICar } from "providers/store/models";
import { generatePath, Link } from "react-router-dom";
import { pathRoutes } from "shared/constants";

import image from "./image.png";
import styles from "./Card.module.scss";

export const Card: FC<ICar> = ({ id, name, price }) => {
	const pageLink = generatePath(pathRoutes.car.path, { id });
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Link to={pageLink}>
					<img src={image} alt={name} />
				</Link>
			</div>
			<div className={styles.content}>
				<Link className={styles.link} to={pageLink}>
					<h4 className={styles.title}>{name}</h4>
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
