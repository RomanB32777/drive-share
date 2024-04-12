import { notification } from "antd";
import { FC } from "react";

import { PeriodForm } from "features/period-form";
import { useCreateRentMutation } from "entities/car";
import { DirectionArrowIcon } from "shared/assets/icons";
import { IPeriodFilterValues } from "shared/interfaces";
import { useAppSelector } from "shared/lib/hooks";

import styles from "./RentForm.module.scss";

export const RentForm: FC = () => {
	const {
		car: { price, owner },
	} = useAppSelector(({ cars }) => cars);

	const [createRent, { isLoading }] = useCreateRentMutation();

	const handleSubmit = async ({ from, to }: IPeriodFilterValues) => {
		const res = await createRent({
			rentBegin: from,
			rentEnd: to,
			renter: 0, // TODO user id here
			seller: owner,
		});

		// TODO вынести обработку успешных запросов в отдельную функцию
		if ("data" in res) {
			notification.success({ message: "Success" });
		}
	};

	return (
		<div className={styles.rent}>
			<div className={styles.form}>
				<h5 className={styles.title}>Период аренды</h5>

				<PeriodForm
					classes={{
						itemsWrapper: styles.filters,
						items: styles.item,
						select: styles.select,
						button: styles.button,
					}}
					onSubmit={handleSubmit}
					disabled={isLoading}
					buttonContent={
						<>
							<span>Забронировать</span>
							<span className={styles.arrow}>
								<DirectionArrowIcon />
							</span>
						</>
					}
				/>
			</div>
			<div className={styles.price}>
				от {price} ₽ <span>/ сутки</span>
			</div>
		</div>
	);
};
