import { Controller, FieldValues } from "react-hook-form";

import { TFormElement } from "../../../../interfaces";
import { type IRadioProps, Radio } from "../radio";

import styles from "./FormRadio.module.scss";

type TRadioProps<TFieldValues extends FieldValues> = TFormElement<TFieldValues, IRadioProps>;

export const FormRadio = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	modificator,
	...radioProps
}: TRadioProps<TFieldValues>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		render={({ field, fieldState: { error } }) => (
			<div className={modificator}>
				<Radio {...radioProps} {...field} />

				{error?.message && <p className={styles.error}>{error.message}</p>}
			</div>
		)}
	/>
);
