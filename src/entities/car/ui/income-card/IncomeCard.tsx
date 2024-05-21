import { FC } from "react";

import { ICarIncome } from "../../model/types";

import styles from "./IncomeCard.module.scss";

export const IncomeCard: FC<ICarIncome> = ({ income, model, year, photo }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<h4 className={styles.title}>{model}</h4>

				<div className={styles.info}>
					<p className={styles.price}>
						{income} ₽ <span>/ сутки</span>
					</p>
					<div className={styles.badge}>{year}</div>
				</div>
			</div>
			<div className={styles.image}>
				<img src={photo} alt={model} />
			</div>
		</div>
	);
};
