import { FC } from "react";

import { IncomeCarousel } from "features/income-carousel";
import { ICarIncome } from "entities/car";

import styles from "./RentIncome.module.scss";

const mockData: ICarIncome[] = [
	{
		id: "1",
		income: 0,
		photo: "",
		model: "",
		year: 0,
	},
	{
		id: "2",
		income: 0,
		photo: "",
		model: "",
		year: 0,
	},
];

export const RentIncome: FC = () => {
	// TODO вернуть, когда будет готова ручка на бэке
	// const { data = [], isLoading } = useFetchIncomeCarsQuery();

	return (
		<div className={styles.wrapper}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi error. Nesciunt quam
				illum obcaecati voluptas rerum. Vero accusamus quis, expedita, itaque sapiente quos
				consequatur, reiciendis assumenda commodi voluptatibus et?
			</p>

			<IncomeCarousel items={mockData} />
		</div>
	);
};
