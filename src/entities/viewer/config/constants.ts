import { generatePath } from "react-router-dom";

import { pathRoutes } from "shared/config/routing";

import { EAuthTypes, TAuthTokenTypes } from "../model/types";

const CONFIRM_TOKEN = "confirmationToken";
const USER_TOKEN = "userId";

export const authTitles: Record<EAuthTypes, string> = {
	[EAuthTypes.SignIn]: "Авторизация",
	[EAuthTypes.SignUp]: "Регистрация",
};

export const authTokens: Record<TAuthTokenTypes, string> = {
	confirmToken: CONFIRM_TOKEN,
	userToken: USER_TOKEN,
};

export const signInLink = generatePath(pathRoutes.auth.path, { type: EAuthTypes.SignIn });
