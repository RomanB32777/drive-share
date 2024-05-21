import { FC } from "react";

import promoImage from "shared/assets/images/phone.png";

import styles from "./AboutBanner.module.scss";

export const AboutBanner: FC = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.wrapper}>
				<img src={promoImage} alt="rent-promo" className={styles.image} />

				<div className={styles.content}>
					<h1 className={styles.title}>
						Сдавайте свою машину в аренду в Москве и зарабатывайте <span>от 50 000 ₽/мес.</span>
					</h1>

					<p className={styles.description}>
						Занимайтесь личными делами, пока ваш автомобиль зарабатывает деньги
					</p>
				</div>
			</div>
		</div>
	);
};
