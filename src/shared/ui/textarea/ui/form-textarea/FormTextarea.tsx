import { Controller, FieldValues } from "react-hook-form";

import { TFormElement } from "../../../../interfaces";
import { type ITextareaProps, Textarea } from "../textarea";

import styles from "./FormTextarea.module.scss";

type TTextareaProps<TFieldValues extends FieldValues> = TFormElement<TFieldValues, ITextareaProps>;

export const FormTextarea = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	modificator,
	...props
}: TTextareaProps<TFieldValues>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		render={({ field, fieldState: { error } }) => (
			<div className={modificator}>
				<Textarea {...props} {...field} />

				{error?.message && <p className={styles.error}>{error.message}</p>}
			</div>
		)}
	/>
);
