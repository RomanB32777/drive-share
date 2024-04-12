import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TSignInViewer, authTypeTitles } from "entities/viewer";
import { usePageTitle } from "shared/lib/hooks";
import { Button, Input } from "shared/ui";

import styles from "./SignInForm.module.scss";

export const SignInForm: FC = () => {
	usePageTitle(authTypeTitles["sign-in"]);

	const {
		// setValue,
		// register,
		// setError,
		// clearErrors,
		handleSubmit,
		control,
		// formState: { errors },
	} = useForm<TSignInViewer>({ defaultValues: { email: "" } });

	const handleSubmitForm: SubmitHandler<TSignInViewer> = (values) => {
		console.log(values);
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<Input control={control} name="email" type="email" label="Email" />
			<Input control={control} name="password" type="password" label="Password" />

			<Button type="submit" modificator={styles.button}>
				Войти
			</Button>
		</form>
	);
};
