import { FC, ReactNode } from "react";

import classNames from "classnames";
import dayjs from "dayjs";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, SearchSelect } from "shared/components";
import { cityOptions, validFromDateMessage, validToDateMessage } from "shared/constants";
import { IPeriodFilterValues, TFilterDateKeys } from "shared/interfaces";

import { DatePeriod } from "./components";
import styles from "./PeriodForm.module.scss";

interface IPeriodForm {
	onSubmit: (values: IPeriodFilterValues) => Promise<unknown>;
	disabled?: boolean;
	classes?: {
		form?: string;
		itemsWrapper?: string;
		items?: string;
		select?: string;
		button?: string;
	};
	buttonContent?: ReactNode;
}

const defaultValues: IPeriodFilterValues = {
	city: cityOptions[0].value,
	from: dayjs().toISOString(),
	to: dayjs().add(1, "day").toISOString(),
};

export const PeriodForm: FC<IPeriodForm> = ({ onSubmit, disabled, classes, buttonContent }) => {
	const {
		setValue,
		setError,
		clearErrors,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IPeriodFilterValues>({
		defaultValues,
	});

	const { city, to, from } = watch();

	const handleSelectChange = (selected: string) => setValue("city", selected);

	const handleDateChange = (filterKey: TFilterDateKeys) => (date: string) => {
		setValue(filterKey, date);

		if (filterKey === "from" && !dayjs(date).isBefore(to)) {
			setError("from", {
				type: "custom",
				message: validFromDateMessage,
			});
		} else if (filterKey === "to" && !dayjs(from).isBefore(date)) {
			setError("to", { type: "custom", message: validToDateMessage });
		} else {
			clearErrors();
		}
	};

	const handleSubmitForm: SubmitHandler<IPeriodFilterValues> = async (values) => {
		await onSubmit(values);
	};

	const isValid = !Object.keys(errors).length;

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className={classes?.form}>
			<div className={classNames(styles.itemsWrapper, classes?.itemsWrapper)}>
				<div className={classNames(classes?.items, classes?.select)}>
					<SearchSelect
						label="Город"
						value={city}
						placeholder="Город"
						onChange={handleSelectChange}
						options={cityOptions}
						disabled={disabled}
					/>
				</div>

				<div className={classes?.items}>
					<DatePeriod
						label="Начало"
						value={from}
						defaultValue={defaultValues.from}
						onChange={handleDateChange("from")}
						disabled={disabled}
					/>
					{errors.from && <p className={styles.error}>{errors.from.message}</p>}
				</div>

				<div className={classes?.items}>
					<DatePeriod
						label="Завершение"
						value={to}
						defaultValue={defaultValues.to}
						onChange={handleDateChange("to")}
						disabled={disabled}
					/>
					{errors.to && <p className={styles.error}>{errors.to.message}</p>}
				</div>
			</div>

			<Button type="submit" disabled={disabled || !isValid} className={classes?.button}>
				{buttonContent ? buttonContent : "Отправить"}
			</Button>
		</form>
	);
};
