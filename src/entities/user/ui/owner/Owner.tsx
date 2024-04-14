import { FC } from "react";

import { UserIcon } from "shared/assets/icons";

import { IUser } from "../../model/types";

import styles from "./Owner.module.scss";

type TOwner = Pick<IUser, "name" | "surname" | "avatar">;

export const Owner: FC<TOwner> = ({ name, surname, avatar }) => {
	const fullName = `${name} ${surname}`;

	return (
		<div className={styles.owner}>
			<div className={styles.icon}>
				{avatar ? <img src={avatar} alt={fullName} className={styles.avatar} /> : <UserIcon />}
			</div>
			<div className={styles.userInfo}>
				<p className={styles.name}>{fullName}</p>
				<p className={styles.description}>Владелец</p>
			</div>
		</div>
	);
};
