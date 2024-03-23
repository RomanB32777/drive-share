import { FC } from "react";

import { IComponentWithModificator } from "shared/interfaces";

import bg from "./bg.png";
import styles from "./Main.module.scss";

export const MainPage: FC<IComponentWithModificator> = ({ modificator }) => {
	return (
		<div className={modificator}>
			<div>
				<img className={styles.bg} src={bg} alt="бэкграунд" />
				<p className={styles.title}>Арендуйте автомобиль</p>
				<p className={styles.subtitle}>в несколько кликов</p>
			</div>
			<div>
				<div className={styles.catalog}>
					<p className={styles.catalogTitle}>Новые предложения в каталоге</p>
					<div className={styles.cards}>cards</div>
				</div>
			</div>
		</div>
	);
};
