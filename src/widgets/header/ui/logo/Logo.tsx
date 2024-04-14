import { FC } from "react";
import { Link } from "react-router-dom";

import { pathRoutes } from "shared/config/routing";

import styles from "./Logo.module.scss";

const LOGO_TEXT = "DRIVESHARE";

export const Logo: FC = () => {
	return (
		<Link className={styles.logo} to={pathRoutes.main.path}>
			{LOGO_TEXT}
		</Link>
	);
};
