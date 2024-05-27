import { useId } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { TFormElement } from "../../../../interfaces";
import { DatePicker, type IDatePicker } from "../date-picker";

import styles from "./FormDatePicker.module.scss";

type TFormDatePicker<TFieldValues extends FieldValues> = TFormElement<TFieldValues, IDatePicker>;

export const FormDatePicker = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	label,
	id: propId,
	required,
	...props
}: TFormDatePicker<TFieldValues>) => {
	const id = useId();
	const elementId = propId || id;

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, value, disabled, name: fieldName },
				fieldState: { error },
			}) => (
				<div>
					{label && (
						<label htmlFor={elementId} className={styles.label}>
							{label}
							{required && <span className={styles.asterisk}>*</span>}
						</label>
					)}

					<DatePicker
						id={elementId}
						value={value}
						disabled={disabled}
						name={fieldName}
						onChange={onChange}
						{...props}
					/>

					{error?.message && <p className={styles.error}>{error.message}</p>}
				</div>
			)}
		/>
	);
};
