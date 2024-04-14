import { Select as AntdSelect, SelectProps } from "antd";
import classNames from "classnames";
import { useId, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { ArrowIcon } from "../../assets/icons";
import { TFormElement } from "../../interfaces";

import styles from "./SearchSelect.module.scss";

interface ISearchSelectOption {
	label: string;
	value: string;
}

type TSelect<TValue, TFieldValues extends FieldValues> = TFormElement<
	TFieldValues,
	Omit<SelectProps<TValue, ISearchSelectOption>, "optionFilterProp" | "filterOption" | "showSearch">
>;

export const SearchSelect = <TValue, TFieldValues extends FieldValues>({
	name,
	rules,
	label,
	control,
	id: propId,
	...props
}: TSelect<TValue, TFieldValues>) => {
	const id = useId();
	const [isFocus, setIsFocus] = useState(false);

	const elementId = propId || id;

	const handleIsFocus = () => setIsFocus((prev) => !prev);

	const handleFocus = () => handleIsFocus();

	const filterOption = (input: string, option?: ISearchSelectOption) =>
		(option?.label ?? "")?.toLowerCase().includes(input.toLowerCase());

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, ...fieldProps } }) => (
				<>
					{label && (
						<label htmlFor={elementId} className={styles.label}>
							{label}
						</label>
					)}

					<AntdSelect
						id={elementId}
						optionFilterProp="children"
						rootClassName={styles.searchSelect}
						suffixIcon={
							<span className={classNames(styles.arrow, { [styles.arrowUp]: isFocus })}>
								<ArrowIcon />
							</span>
						}
						onChange={(v) => onChange(v)}
						filterOption={filterOption}
						onDropdownVisibleChange={handleFocus}
						showSearch
						{...props}
						{...fieldProps}
					/>
				</>
			)}
		/>
	);
};
