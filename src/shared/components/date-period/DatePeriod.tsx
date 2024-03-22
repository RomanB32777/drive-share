import { FC } from "react";

import { DatePicker, DatePickerProps, TimePicker } from "antd";
import dayjs from "dayjs";

import styles from "./DatePeriod.module.scss";

const timeFormat = "HH:mm";
const dateFormat = "DD/MM/YYYY";

interface IDatePeriod {
	label?: string;
	defaultDateValue?: dayjs.Dayjs | null | undefined;
	defaultTimeValue?: dayjs.Dayjs | null | undefined;
}

export const DatePeriod: FC<IDatePeriod> = ({ label, defaultDateValue, defaultTimeValue }) => {
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<div>
			{label && <p className={styles.label}>{label}</p>}
			<div>
				<DatePicker
					defaultValue={defaultDateValue || dayjs()}
					format={dateFormat}
					onChange={onChange}
					rootClassName={styles.picker}
				/>
				<TimePicker
					defaultValue={defaultTimeValue || dayjs()}
					format={timeFormat}
					rootClassName={styles.picker}
				/>
			</div>
		</div>
	);
};
