import { Control, Path } from "react-hook-form";

import { TAuthByEmail } from "entities/viewer";
import { FormInput } from "shared/ui";

import { authValidation } from "../../model/validation";

import styles from "./AuthFields.module.scss";

interface IAuthFields<FormControl extends TAuthByEmail> {
	control: Control<FormControl>;
}

const [emailName, passwordName]: Path<TAuthByEmail>[] = ["email", "password"];

export const AuthFields = <T extends TAuthByEmail>({ control }: IAuthFields<T>) => (
	<div className={styles.fields}>
		<FormInput
			control={control}
			rules={authValidation.email}
			name={emailName as Path<T>}
			type="email"
			label="Email"
		/>

		<FormInput
			control={control}
			rules={authValidation.password}
			name={passwordName as Path<T>}
			type="password"
			label="Пароль"
		/>
	</div>
);
