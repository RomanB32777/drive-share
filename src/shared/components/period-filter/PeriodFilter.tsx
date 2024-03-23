import { FC } from "react";

import classNames from "classnames";
import { Dayjs } from "dayjs";
import { UseFormSetValue } from "react-hook-form";
import { DatePeriod, SearchSelect } from "shared/components";
import { cityOptions } from "shared/constants";
import { IPeriodFilterValues, IPeriodValues } from "shared/interfaces";

export const timeFormat = "HH:mm";
export const dateFormat = "DD/MM/YYYY";

interface IPeriodFilter {
	data: IPeriodFilterValues;
	defaultValues: IPeriodFilterValues;
	disabled?: boolean;
	classes?: {
		items?: string;
		select?: string;
	};
	setValue: UseFormSetValue<IPeriodFilterValues>;
}

export const PeriodFilter: FC<IPeriodFilter> = ({
	data: { city, from, to },
	defaultValues,
	disabled,
	classes,
	setValue,
}) => {
	const onSelectChange = (selected: string) => setValue("city", selected);

	const onDateChange =
		(filterKey: Exclude<keyof IPeriodFilterValues, "city">, dateKey: keyof IPeriodValues) =>
		(date: Dayjs) => {
			setValue(`${filterKey}.${dateKey}`, date);
		};

	return (
		<>
			<div className={classNames(classes?.items, classes?.select)}>
				<SearchSelect
					label="Город"
					value={city}
					placeholder="Город"
					onChange={onSelectChange}
					options={cityOptions}
					disabled={disabled}
				/>
			</div>

			<div className={classes?.items}>
				<DatePeriod
					label="Начало"
					datePickerProps={{
						onChange: onDateChange("from", "date"),
						value: from.date,
						defaultValue: defaultValues.from.date,
						format: dateFormat,
						disabled,
					}}
					timePickerProps={{
						onChange: onDateChange("from", "time"),
						value: from.time,
						defaultValue: defaultValues.from.time,
						format: timeFormat,
						disabled,
					}}
				/>
			</div>

			<div className={classes?.items}>
				<DatePeriod
					label="Завершение"
					datePickerProps={{
						onChange: onDateChange("to", "date"),
						value: to.date,
						defaultValue: defaultValues.to.date,
						format: dateFormat,
						disabled,
					}}
					timePickerProps={{
						onChange: onDateChange("to", "time"),
						value: to.time,
						defaultValue: defaultValues.to.time,
						format: timeFormat,
						disabled,
					}}
				/>
			</div>
		</>
	);
};
