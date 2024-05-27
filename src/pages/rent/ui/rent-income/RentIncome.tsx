import { FC } from "react";

import { IncomeCarousel } from "features/income-carousel";
import { ICarIncome } from "entities/car";
// TODO убрать импорты изображений, когда будет готова ручка на бэке
import hyundai from "shared/assets/images/hyundai.png";
import kia from "shared/assets/images/kia.png";
import mercedes from "shared/assets/images/mercedes.png";

import styles from "./RentIncome.module.scss";

// TODO убрать, когда будет готова ручка на бэке
const mockData: ICarIncome[] = [
	{
		id: "1",
		income: 95_000,
		photo: mercedes,
		model: "Mercedes-Benz E 200",
		year: 2020,
	},
	{
		id: "2",
		income: 55_000,
		photo: hyundai,
		model: "Hyundai Solaris",
		year: 2021,
	},
	{
		id: "3",
		income: 85_000,
		photo: kia,
		model: "Kia К5",
		year: 2020,
	},
];

export const RentIncome: FC = () => {
	// TODO вернуть, когда будет готова ручка на бэке
	// const { data = [], isLoading } = useFetchIncomeCarsQuery();

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<span className={styles.pretitle}>Доход</span>
				<h4 className={styles.title}>
					Узнайте, <span>сколько вы можете зарабатывать</span> каждый месяц
				</h4>

				<p className={styles.description}>
					Доходы от автомобилей различаются в зависимости от марки, модели, доступности календаря и
					рынка. Показанные цифры доходов и информация об автомобиле предоставлены реальными
					владельцами на DriveShare.
				</p>
			</div>

			<div className={styles.carouselWrapper}>
				<IncomeCarousel items={mockData} />
			</div>
		</div>
	);
};
