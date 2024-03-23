import { useState } from "react";

import { Select as AntdSelect, SelectProps } from "antd";
import classNames from "classnames";
import { ArrowIcon } from "shared/assets/icons";

import styles from "./SearchSelect.module.scss";

interface ISearchSelectOption {
	label: string;
	value: string;
}

interface ISelect<TValue>
	extends Omit<
		SelectProps<TValue, ISearchSelectOption>,
		"optionFilterProp" | "filterOption" | "showSearch"
	> {
	label?: string;
}

export const SearchSelect = <TValue,>({ label, ...props }: ISelect<TValue>) => {
	const [isFocus, setIsFocus] = useState(false);

	const handleIsFocus = () => setIsFocus((prev) => !prev);

	const handleFocus = () => handleIsFocus();

	const filterOption = (input: string, option?: ISearchSelectOption) =>
		(option?.label ?? "")?.toLowerCase().includes(input.toLowerCase());

	return (
		<>
			{label && <p className={styles.label}>{label}</p>}
			<AntdSelect
				optionFilterProp="children"
				filterOption={filterOption}
				onDropdownVisibleChange={handleFocus}
				rootClassName={styles.searchSelect}
				suffixIcon={
					<span className={classNames(styles.arrow, { [styles.arrowUp]: isFocus })}>
						<ArrowIcon />
					</span>
				}
				showSearch
				{...props}
			/>
		</>
	);
};
