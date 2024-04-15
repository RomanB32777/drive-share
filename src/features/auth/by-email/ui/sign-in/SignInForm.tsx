import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IViewer, TAuthByEmail, useSignInMutation } from "entities/viewer";
import { handleMutationResult } from "shared/api";
import { Button } from "shared/ui";

import { IAuthForm } from "../../model/types";
import { AuthFields } from "../auth-fields/AuthFields";

import styles from "./SignInForm.module.scss";

export const SignInForm: FC<IAuthForm> = ({ onSuccess }) => {
	const [signIn, { isLoading }] = useSignInMutation();

	const { handleSubmit, control } = useForm<TAuthByEmail>({
		disabled: isLoading,
		mode: "onSubmit",
	});

	const handleSubmitForm: SubmitHandler<TAuthByEmail> = async (values) => {
		const res = await signIn(values);

		const data = handleMutationResult<IViewer>(res);

		if (data) {
			onSuccess(data);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<AuthFields control={control} />

			<Button type="submit" modificator={styles.button} disabled={isLoading}>
				Войти
			</Button>
		</form>
	);
};
