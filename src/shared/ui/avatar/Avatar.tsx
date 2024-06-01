import type { FC, PropsWithChildren } from "react";

import { UserIcon } from "../../assets/icons";
import { IComponentWithModificator } from "../../interfaces";

import styles from "./Avatar.module.scss";

interface IAvatar extends PropsWithChildren, IComponentWithModificator {
	src?: string;
	alt?: string;
}

export const Avatar: FC<IAvatar> = ({ src, alt = "avatar", children = <UserIcon /> }) => (
	<div className={styles.avatar}>
		{src ? <img src={src} alt={alt} className={styles.image} /> : children}
	</div>
);
