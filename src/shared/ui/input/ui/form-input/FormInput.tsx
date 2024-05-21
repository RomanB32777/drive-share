import { Controller, FieldValues } from "react-hook-form";

import { TFormElement } from "../../../../interfaces";
import { type IInput, Input } from "../input";

import styles from "./FormInput.module.scss";

type TInput<TFieldValues extends FieldValues> = TFormElement<TFieldValues, IInput>;

export const FormInput = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	modificator,
	...inputProps
}: TInput<TFieldValues>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		render={({ field, fieldState: { error } }) => (
			<div className={modificator}>
				<Input {...inputProps} {...field} />

				{error?.message && <p className={styles.error}>{error.message}</p>}
			</div>
		)}
	/>
);
