import { FC } from "react";

import { UserIcon } from "shared/assets/icons";

import styles from "./Owner.module.scss";

export const Owner: FC = () => {
	return (
		<div className={styles.owner}>
			<div className={styles.icon}>
				<UserIcon />
			</div>
			<div>
				<p className={styles.name}>Андрей Иванов</p>
				<p className={styles.description}>Владелец</p>
			</div>
		</div>
	);
};
