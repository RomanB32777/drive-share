import { FC } from "react";

import { IUser } from "shared/types";
import { Avatar } from "shared/ui";

import styles from "./Owner.module.scss";

export const Owner: FC<IUser> = ({ name, surname, avatar }) => {
	const fullName = [name, surname].join(" ");

	return (
		<div className={styles.owner}>
			<Avatar src={avatar} alt={fullName} />

			<div className={styles.userInfo}>
				<p className={styles.name}>{fullName}</p>
				<p className={styles.description}>Владелец</p>
			</div>
		</div>
	);
};
