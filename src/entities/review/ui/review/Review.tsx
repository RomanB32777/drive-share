import { FC } from "react";

import { reformatDate } from "shared/lib/datetime";
import { Avatar, Rating } from "shared/ui";

import { IReview } from "../../model/types";

import styles from "./Review.module.scss";

export const Review: FC<IReview> = ({
	user: { name, surname, avatar },
	rating,
	comment,
	createdAt,
}) => {
	const fullName = [name, surname].join(" ");

	return (
		<div>
			<div className={styles.user}>
				<Avatar src={avatar} alt={fullName} />

				<div>
					<p className={styles.name}>{fullName}</p>

					<Rating value={rating} />
				</div>
			</div>

			<div>
				<p className={styles.comment}>{comment}</p>
				<span className={styles.date}>{reformatDate(createdAt)}</span>
			</div>
		</div>
	);
};
