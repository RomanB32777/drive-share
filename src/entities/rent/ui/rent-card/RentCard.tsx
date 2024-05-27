import { FC } from "react";

import { diffDates, getDateDuration, getFromNow, reformatDate } from "shared/lib/datetime";

import { IRent } from "../../model/types";

import styles from "./RentCard.module.scss";

export const RentCard: FC<IRent> = ({
	id,
	model,
	photo,
	status,
	createdAt,
	rentBegin,
	rentEnd,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.topContent}>
				<div className={styles.carInfo}>
					<div className={styles.image}>
						<img src={photo} alt={model} />
					</div>

					<div>
						<h4 className={styles.name}>{model}</h4>
						<p className={styles.id}>{id}</p>
					</div>
				</div>

				<div>
					<p className={styles.status}>{status}</p>
				</div>
			</div>
			<div className={styles.bottomContent}>
				<div className={styles.details}>
					<div>
						<p className={styles.label}>Период аренды</p>
						<p className={styles.value}>{getDateDuration(diffDates(rentBegin, rentEnd))}:</p>
						<p className={styles.description}>
							{reformatDate(rentBegin, "DD.MM.YYYY")} - {reformatDate(rentEnd, "DD.MM.YYYY")}
						</p>
					</div>

					<div>
						<p className={styles.label}>Статус</p>
						<p className={styles.value}>{status}:</p>
						<p className={styles.description}>17.04.2024, в 21:36</p>
					</div>
				</div>
				<p className={styles.ago}>{getFromNow(createdAt)}</p>
			</div>
		</div>
	);
};
