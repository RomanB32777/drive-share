import { FC } from "react";

import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";
import { ArrowIcon } from "shared/assets/icons";
import { DatePicker, TimePicker } from "shared/components";
import { joinDateTime } from "shared/utils";

import styles from "./DatePeriod.module.scss";

export interface IDatePeriod {
	value: string; // utc string
	label?: string;
	defaultValue?: string; // utc string
	dateFormat?: string;
	timeFormat?: string;
	disabled?: boolean;
	onChange: (value: string) => void;
}

export const DatePeriod: FC<IDatePeriod> = ({
	label,
	value,
	defaultValue,
	disabled,
	timeFormat = "HH:mm",
	dateFormat = "DD/MM/YYYY",
	onChange,
}) => {
	const formatValue = dayjs(value);
	const formatDefaultValue = dayjs(defaultValue);

	const renderSuffixIcon = (isFocus: boolean) => (
		<span className={classNames(styles.arrow, { [styles.arrowUp]: isFocus })}>
			<ArrowIcon />
		</span>
	);

	const handleChangeDate = (date: Dayjs) => {
		onChange(joinDateTime(date, formatValue).toISOString());
	};

	const handleChangeTime = (time: Dayjs) => {
		onChange(joinDateTime(formatValue, time).toISOString());
	};

	return (
		<div>
			{label && <p className={styles.label}>{label}</p>}
			<div className={styles.pickers}>
				<DatePicker
					value={formatValue}
					defaultValue={formatDefaultValue}
					disabled={disabled}
					format={dateFormat}
					allowClear={false}
					onChange={handleChangeDate}
					renderSuffixIcon={renderSuffixIcon}
				/>
				<TimePicker
					value={formatValue}
					defaultValue={formatDefaultValue}
					disabled={disabled}
					format={timeFormat}
					allowClear={false}
					onChange={handleChangeTime}
					renderSuffixIcon={renderSuffixIcon}
				/>
			</div>
		</div>
	);
};
