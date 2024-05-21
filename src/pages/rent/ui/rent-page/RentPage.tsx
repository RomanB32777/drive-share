import { FC } from "react";

import { pathRoutes } from "shared/config/routing";
import { usePageTitle } from "shared/lib/hooks";

import { RentBanner } from "../rent-banner";
import { RentIncome } from "../rent-income";
import { RentPromo } from "../rent-promo";

import styles from "./RentPage.module.scss";

export const RentPage: FC = () => {
	usePageTitle(pathRoutes.rent.title);

	return (
		<div className={styles.layout}>
			<RentBanner />

			<div className={styles.wrapper}>
				<RentIncome />
				<RentPromo />
			</div>
		</div>
	);
};
