import { Select } from "antd";
import dayjs from "dayjs";
import { SearchIcon } from "shared/assets/icons";
import { DatePeriod } from "shared/components";

import styles from "./PeriodFilter.module.scss";

const defaultCityOptions = [
	{
		value: "st",
		label: "Санкт-Петербург",
	},
];

export const PeriodFilter = () => {
	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch = (value: string) => {
		console.log("search:", value);
	};

	const filterOption = (input: string, option?: { label: string; value: string }) =>
		(option?.label ?? "").toLowerCase().includes(input.toLowerCase());

	return (
		<div className={styles.filter}>
			<div>
				<p className={styles.label}>Город</p>
				<Select
					showSearch
					defaultValue={defaultCityOptions[0].value}
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={onChange}
					onSearch={onSearch}
					filterOption={filterOption}
					options={defaultCityOptions}
					rootClassName={styles.searchSelect}
				/>
			</div>

			<div>
				<DatePeriod label="Начало" />
			</div>
			<div>
				<DatePeriod label="Завершение" defaultDateValue={dayjs().add(1, "day")} />
			</div>

			<div className={styles.button}>
				<SearchIcon />
			</div>
		</div>
	);
};
