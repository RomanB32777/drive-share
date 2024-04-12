import { FC } from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";

import { SignInForm } from "features/auth/sign-in";
import { SignUpForm } from "features/auth/sign-up";
import { EAuthTypes } from "entities/viewer";
import { pathRoutes } from "shared/const";
import { IComponentWithModificator } from "shared/interfaces";
import { Button } from "shared/ui";

import styles from "./AuthPage.module.scss";

export const AuthPage: FC<IComponentWithModificator> = ({ modificator }) => {
	const { type } = useParams();
	const navigate = useNavigate();

	if (!type || !Object.values(EAuthTypes).includes(type as EAuthTypes)) {
		return null;
	}

	const isSignIn = type === EAuthTypes.SignIn;

	const handleRedirectButton = () => {
		navigate(
			generatePath(pathRoutes.auth.path, { type: isSignIn ? EAuthTypes.SignUp : EAuthTypes.SignIn })
		);
	};

	return (
		<div className={modificator}>
			<h1 className={styles.title}>Введите данные</h1>

			<div className={styles.form}>{isSignIn ? <SignInForm /> : <SignUpForm />}</div>

			<div className={styles.redirect}>
				<p className={styles.question}>{isSignIn ? "Еще нет аккаунта? " : "Уже есть аккаунт?"}</p>

				<Button style="outline" modificator={styles.button} onClick={handleRedirectButton}>
					{isSignIn ? "Регистрация" : "Войти"}
				</Button>
			</div>
		</div>
	);
};
