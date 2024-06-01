import { FC } from "react";

import { diffDates, getDateDuration, getFromNow, reformatDate } from "shared/lib/datetime";
import { Button } from "shared/ui";

import { rentStatusTitles } from "../../config/constants";
import { ERentStatus, IRent } from "../../model/types";
import { RentStatus } from "../rent-status";

import styles from "./RentCard.module.scss";

interface IRentCard extends IRent {
	onReviewClick: (carId: number) => void;
}

export const RentCard: FC<IRentCard> = ({
	id,
	model,
	photo,
	status,
	createdAt,
	rentBegin,
	rentEnd,
	carId,
	onReviewClick,
}) => {
	const handleReviewClick = () => onReviewClick(carId);

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
					<RentStatus status={status} />
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
						<p className={styles.value}>{rentStatusTitles[status]}:</p>
						<p className={styles.description}>17.04.2024, в 21:36</p>
					</div>
				</div>
				<p className={styles.ago}>{getFromNow(createdAt)}</p>
			</div>

			{status === ERentStatus.Complete && (
				<div className={styles.reviewButton}>
					<Button style="outlinePrimary" onClick={handleReviewClick}>
						Оставить отзыв
					</Button>
				</div>
			)}
		</div>
	);
};
