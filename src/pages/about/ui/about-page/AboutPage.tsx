import { FC } from "react";

import { pathRoutes } from "shared/config/routing";
import { usePageTitle } from "shared/lib/hooks";

import styles from "./AboutPage.module.scss";

export const AboutPage: FC = () => {
	usePageTitle(pathRoutes.about.title);

	return (
		<div className={styles.layout}>
			banner
			<div className={styles.wrapper}>about</div>
		</div>
	);
};
