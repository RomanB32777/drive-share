import classNames from "classnames";
import { FC } from "react";
import { Link, generatePath } from "react-router-dom";

import { pathRoutes } from "shared/config/routing";
import { getValueCurrency } from "shared/lib/number";

import { ICar, ICarCardBaseProps } from "../../model/types";

import styles from "./CarCard.module.scss";

export type TCarCard = ICar & ICarCardBaseProps;

export const CarCard: FC<TCarCard> = ({
	id,
	parameters: { model },
	mainPhono,
	price: { basePerDay },
	modificator,
	children,
	isWithBadge,
}) => {
	const pageLink = generatePath(pathRoutes.car.path, { id });

	return (
		<div className={classNames(styles.card, modificator)}>
			<div className={styles.image}>
				<Link to={pageLink}>
					<img src={mainPhono} alt={model} />
				</Link>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>
					<Link className={styles.link} to={pageLink}>
						{model}
					</Link>
				</h4>

				<div className={styles.info}>
					<p className={styles.price}>
						{getValueCurrency(basePerDay)} <span>/ сутки</span>
					</p>

					{isWithBadge && <div className={styles.badge}>New</div>}
				</div>

				{children}
			</div>
		</div>
	);
};
