import { FC, useEffect } from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";

import { SignInByEmail, SignUpByEmail } from "features/auth/by-email";
import { EAuthTypes, IViewer, authTitles, isAuthorizedViewer, tokenService } from "entities/viewer";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector, usePageTitle, useGoBack } from "shared/lib/hooks";
import { Button } from "shared/ui";

import styles from "./AuthPage.module.scss";

export const AuthPage: FC = () => {
	const { type } = useParams();
	const navigate = useNavigate();
	const goBack = useGoBack();

	const isAuthorized = useAppSelector(isAuthorizedViewer);

	useEffect(() => {
		if (isAuthorized) {
			navigate(pathRoutes.main.path);
		}
	}, [isAuthorized, navigate]);

	const isSignUp = type === EAuthTypes.SignUp;

	usePageTitle(isSignUp ? authTitles["sign-up"] : authTitles["sign-in"]);

	const handleRedirectButton = () => {
		navigate(
			generatePath(pathRoutes.auth.path, { type: isSignUp ? EAuthTypes.SignIn : EAuthTypes.SignUp })
		);
	};

	const handleAuthSuccess = (data: IViewer) => {
		tokenService.setTokens({ confirmToken: data.confirmationToken, userToken: String(data.id) });
		goBack();
	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Введите данные</h1>

			<div className={styles.form}>
				{isSignUp ? (
					<SignUpByEmail onSuccess={handleAuthSuccess} />
				) : (
					<SignInByEmail onSuccess={handleAuthSuccess} />
				)}
			</div>

			<div className={styles.redirect}>
				<p className={styles.question}>{isSignUp ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}</p>

				<Button style="outline" modificator={styles.button} onClick={handleRedirectButton}>
					{isSignUp ? "Войти" : "Регистрация"}
				</Button>
			</div>
		</div>
	);
};
