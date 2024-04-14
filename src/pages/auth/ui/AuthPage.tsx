import { FC, useEffect } from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";

import { SignInByEmail, SignUpByEmail } from "features/auth/by-email";
import { EAuthTypes, IViewer, authTitles, isAuthorizedViewer, tokenService } from "entities/viewer";
import { pathRoutes } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";
import { goBack } from "shared/lib/goBack";
import { useAppSelector, usePageTitle } from "shared/lib/hooks";
import { Button } from "shared/ui";

import styles from "./AuthPage.module.scss";

export const AuthPage: FC<IComponentWithModificator> = ({ modificator }) => {
	const { type } = useParams();
	const navigate = useNavigate();

	const isAuthorized = useAppSelector(isAuthorizedViewer);

	useEffect(() => {
		if (isAuthorized || !type || !Object.values(EAuthTypes).includes(type as EAuthTypes)) {
			// TODO redirect to back/main page
			// goBack(navigate);
		}
	}, [isAuthorized, type, navigate]);

	const isSignIn = type === EAuthTypes.SignIn;

	usePageTitle(isSignIn ? authTitles["sign-in"] : authTitles["sign-up"]);

	const handleRedirectButton = () => {
		navigate(
			generatePath(pathRoutes.auth.path, { type: isSignIn ? EAuthTypes.SignUp : EAuthTypes.SignIn })
		);
	};

	const handleAuthSuccess = (data: IViewer) => {
		tokenService.setTokens({ confirmToken: data.confirmationToken, userToken: String(data.id) });
		goBack(navigate);
	};

	return (
		<div className={modificator}>
			<h1 className={styles.title}>Введите данные</h1>

			<div className={styles.form}>
				{isSignIn ? (
					<SignInByEmail onSuccess={handleAuthSuccess} />
				) : (
					<SignUpByEmail onSuccess={handleAuthSuccess} />
				)}
			</div>

			<div className={styles.redirect}>
				<p className={styles.question}>{isSignIn ? "Еще нет аккаунта? " : "Уже есть аккаунт?"}</p>

				<Button style="outline" modificator={styles.button} onClick={handleRedirectButton}>
					{isSignIn ? "Регистрация" : "Войти"}
				</Button>
			</div>
		</div>
	);
};
