import { useId } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { TFormElement } from "../../../../interfaces";
import { TimePicker, type ITimePicker } from "../time-picker";

import styles from "./FormTimePicker.module.scss";

type TFormTimePicker<TFieldValues extends FieldValues> = TFormElement<TFieldValues, ITimePicker>;

export const FormTimePicker = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	label,
	id: propId,
	...props
}: TFormTimePicker<TFieldValues>) => {
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
						</label>
					)}

					<TimePicker
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
