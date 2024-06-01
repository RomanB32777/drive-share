import { FC, ReactNode } from "react";

import { CarCard, ICar, ICarCardBaseProps } from "entities/car";
import { ContentLayout } from "shared/ui";

import styles from "./CarsGrid.module.scss";

interface ICarsGrid {
	items: ICar[];
	isLoading?: boolean;
	cardProps?: ICarCardBaseProps;
	renderCardContent?: (car: ICar) => ReactNode;
}

export const CarsGrid: FC<ICarsGrid> = ({ items, isLoading, cardProps, renderCardContent }) => (
	<ContentLayout isLoading={isLoading} modificator={styles.wrapper} isPageContent>
		<div className={styles.cards}>
			{items?.map((item) => (
				<CarCard key={item.id} {...item} {...cardProps}>
					{renderCardContent?.(item)}
				</CarCard>
			))}
		</div>
	</ContentLayout>
);
