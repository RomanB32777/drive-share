import { Controller, FieldValues } from "react-hook-form";

import { TFormElement } from "../../../../interfaces";
import { IRating, Rating } from "../rating";

import styles from "./FormRating.module.scss";

type TRatingProps<TFieldValues extends FieldValues> = TFormElement<TFieldValues, IRating>;

export const FormRating = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	label,
	disabled = false,
	...props
}: TRatingProps<TFieldValues>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		render={({ field, fieldState: { error } }) => (
			<div>
				{label && <p className={styles.label}>{label}</p>}

				<Rating disabled={disabled} {...props} {...field} />

				{error?.message && <p className={styles.error}>{error.message}</p>}
			</div>
		)}
	/>
);
