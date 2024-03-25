import { FC } from "react";

import { notification } from "antd";
import { useCreateRentMutation } from "providers/store/models";
import { DirectionArrowIcon } from "shared/assets/icons";
import { PeriodForm } from "shared/components";
import { useAppSelector } from "shared/hooks";
import { IPeriodFilterValues } from "shared/interfaces";

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
			renter: 0,
			seller: owner,
		});

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
