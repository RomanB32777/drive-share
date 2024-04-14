import { FC } from "react";

import promoImage from "shared/assets/images/promo.png";
import { IComponentWithModificator } from "shared/interfaces";
import { Button } from "shared/ui";

import styles from "./MainPromo.module.scss";

export const MainPromo: FC<IComponentWithModificator> = () => {
	return (
		<div className={styles.promo}>
			<div className={styles.content}>
				<h4 className={styles.title}>Сделайте свой автомобиль прибыльным!</h4>
				<p className={styles.description}>
					Станьте арендодателем - добавьте свой автомобиль на DriveShare и зарабатывайте
					дополнительные деньги каждый месяц.
				</p>

				<Button style="outlinePrimary" modificator={styles.button}>
					Узнать больше
				</Button>
			</div>

			<div className={styles.imageWrapper}>
				<img className={styles.image} src={promoImage} alt="promo" />
			</div>
		</div>
	);
};