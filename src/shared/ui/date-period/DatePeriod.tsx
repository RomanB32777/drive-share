import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";
import { Controller, FieldValues } from "react-hook-form";

import { ArrowIcon } from "../../assets/icons";
import { TFormElement } from "../../interfaces";
import { joinDateTime } from "../../lib/datetime";
import { DatePicker } from "../date-picker";
import { TimePicker } from "../time-picker";

import styles from "./DatePeriod.module.scss";

interface IDatePeriod<TFieldValues extends FieldValues> extends TFormElement<TFieldValues> {
	dateFormat?: string;
	timeFormat?: string;
	disabled?: boolean;
}

export const DatePeriod = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	label,
	disabled,
	timeFormat = "HH:mm",
	dateFormat = "DD/MM/YYYY",
}: IDatePeriod<TFieldValues>) => {
	const renderSuffixIcon = (isFocus: boolean) => (
		<span className={classNames(styles.arrow, { [styles.arrowUp]: isFocus })}>
			<ArrowIcon />
		</span>
	);

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, value },
				fieldState: { error },
				formState: { defaultValues },
			}) => {
				const formatValue = dayjs(value);
				const formatDefaultValue = dayjs(defaultValues?.[name] || dayjs().toISOString());

				const handleChangeDate = (date: Dayjs) => {
					onChange(joinDateTime(date, formatValue).toISOString());
				};

				const handleChangeTime = (time: Dayjs) => {
					onChange(joinDateTime(formatValue, time).toISOString());
				};

				return (
					<>
						{label && <p className={styles.label}>{label}</p>}

						<div className={styles.pickers}>
							<DatePicker
								value={formatValue}
								defaultValue={formatDefaultValue}
								disabled={disabled}
								format={dateFormat}
								allowClear={false}
								rootClassName={styles.datePicker}
								onChange={handleChangeDate}
								renderSuffixIcon={renderSuffixIcon}
								variant="borderless"
							/>
							<TimePicker
								value={formatValue}
								defaultValue={formatDefaultValue}
								disabled={disabled}
								format={timeFormat}
								allowClear={false}
								modificator={styles.timePicker}
								onChange={handleChangeTime}
								renderSuffixIcon={renderSuffixIcon}
							/>
						</div>

						{error && <p className={styles.error}>{error.message}</p>}
					</>
				);
			}}
		/>
	);
};
