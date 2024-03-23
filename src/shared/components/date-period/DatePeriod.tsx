import { FC } from "react";

import { DatePickerProps, TimePickerProps } from "antd";
import classNames from "classnames";
import { ArrowIcon } from "shared/assets/icons";

import { DatePicker } from "../date-picker";
import { TimePicker } from "../time-picker";
import styles from "./DatePeriod.module.scss";

export interface IDatePeriod {
	label?: string;
	datePickerProps?: DatePickerProps;
	timePickerProps?: TimePickerProps;
}

export const DatePeriod: FC<IDatePeriod> = ({ label, datePickerProps, timePickerProps }) => {
	const renderSuffixIcon = (isFocus: boolean) => (
		<span className={classNames(styles.arrow, { [styles.arrowUp]: isFocus })}>
			<ArrowIcon />
		</span>
	);

	return (
		<div>
			{label && <p className={styles.label}>{label}</p>}
			<div className={styles.pickers}>
				<DatePicker allowClear={false} renderSuffixIcon={renderSuffixIcon} {...datePickerProps} />
				<TimePicker allowClear={false} renderSuffixIcon={renderSuffixIcon} {...timePickerProps} />
			</div>
		</div>
	);
};
