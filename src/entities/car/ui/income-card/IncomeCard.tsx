import { FC } from "react";

import { getValueCurrency } from "shared/lib/number";

import { ICarIncome } from "../../model/types";

import styles from "./IncomeCard.module.scss";

export const IncomeCard: FC<ICarIncome> = ({ income, model, year, photo }) => (
	<div className={styles.card}>
		<div className={styles.content}>
			<div>
				<h4 className={styles.value}>{getValueCurrency(income)}</h4>
				<p className={styles.description}>Доход в месяц</p>
			</div>

			<div>
				<h4 className={styles.value}>{model}</h4>
				<p className={styles.description}>{year}</p>
			</div>
		</div>
		<div className={styles.image}>
			<img src={photo} alt={model} />
		</div>
	</div>
);
