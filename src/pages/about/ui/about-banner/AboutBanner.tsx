import { FC } from "react";

import aboutImage from "shared/assets/images/about-banner.png";

import styles from "./AboutBanner.module.scss";

export const AboutBanner: FC = () => {
	return (
		<div className={styles.banner}>
			<img src={aboutImage} alt="about-promo" className={styles.image} />

			<div className={styles.titleBlock}>
				<h1 className={styles.title}>Маркетплейс аренды автомобилей</h1>
			</div>
		</div>
	);
};
