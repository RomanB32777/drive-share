import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IViewer, TSignUpViewer, useSignUpMutation } from "entities/viewer";
import { handleMutationResult } from "shared/api";
import { Button, FormInput } from "shared/ui";

import { IAuthForm } from "../../model/types";
import { registrationValidation } from "../../model/validation";
import { AuthFields } from "../auth-fields/AuthFields";

import styles from "./SignUpForm.module.scss";

export const SignUpForm: FC<IAuthForm> = ({ onSuccess }) => {
	const [signUp, { isLoading }] = useSignUpMutation();

	const { handleSubmit, control } = useForm<TSignUpViewer>({
		disabled: isLoading,
		mode: "onSubmit",
	});

	const handleSubmitForm: SubmitHandler<TSignUpViewer> = async (values) => {
		const res = await signUp(values);

		const data = handleMutationResult<IViewer>(res);

		if (data) {
			onSuccess(data);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<div className={styles.fields}>
				<div className={styles.row}>
					<FormInput
						control={control}
						rules={registrationValidation.name}
						name="name"
						label="Имя"
						modificator={styles.item}
					/>

					<FormInput
						control={control}
						rules={registrationValidation.surname}
						name="surname"
						label="Фамилия"
						modificator={styles.item}
					/>
				</div>

				<AuthFields control={control} />
			</div>

			<Button type="submit" modificator={styles.button} disabled={isLoading}>
				Зарегистрироваться
			</Button>
		</form>
	);
};
