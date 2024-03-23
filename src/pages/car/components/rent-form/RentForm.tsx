import { FC } from "react";

import dayjs from "dayjs";
import { useCreateRentMutation } from "providers/store/models";
import { SubmitHandler, useForm } from "react-hook-form";
import { DirectionArrowIcon } from "shared/assets/icons";
import { Button, PeriodFilter } from "shared/components";
import { cityOptions } from "shared/constants";
import { useAppSelector } from "shared/hooks";
import { IPeriodFilterValues } from "shared/interfaces";

import styles from "./RentForm.module.scss";

const defaultValues: IPeriodFilterValues = {
	city: cityOptions[0].value,
	from: { date: dayjs(), time: dayjs() },
	to: { date: dayjs().add(1, "day"), time: dayjs() },
};

export const RentForm: FC = () => {
	const {
		car: { price, owner },
	} = useAppSelector(({ cars }) => cars);

	const [createRent, { isLoading }] = useCreateRentMutation();

	const { setValue, handleSubmit, watch } = useForm<IPeriodFilterValues>({
		defaultValues,
	});

	const filterParams = watch();

	const onSubmit: SubmitHandler<IPeriodFilterValues> = ({ from, to }) => {
		const rentBegin = from.date
			.set("hour", from.time.hour())
			.set("minute", from.time.minute())
			.toISOString();

		const rentEnd = to.date
			.set("hour", to.time.hour())
			.set("minute", to.time.minute())
			.toISOString();

		createRent({
			rentBegin,
			rentEnd,
			renter: 0,
			seller: owner,
		});
	};

	return (
		<div className={styles.rent}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h5 className={styles.title}>Период аренды</h5>

				<div className={styles.filters}>
					<PeriodFilter
						data={filterParams}
						defaultValues={defaultValues}
						setValue={setValue}
						classes={{
							items: styles.item,
						}}
						disabled={isLoading}
					/>
				</div>

				<Button type="submit" disabled={isLoading}>
					<>
						<span>Забронировать</span>
						<span className={styles.arrow}>
							<DirectionArrowIcon />
						</span>
					</>
				</Button>
			</form>
			<div className={styles.price}>
				от {price} ₽ <span>/ сутки</span>
			</div>
		</div>
	);
};
