import { EAuthTypes, TAuthTokenTypes } from "../model/types";

export const CONFIRM_TOKEN = "confirmationToken";
export const USER_TOKEN = "userId";

export const authTitles: Record<EAuthTypes, string> = {
	[EAuthTypes.SignIn]: "Авторизация",
	[EAuthTypes.SignUp]: "Регистрация",
};

export const authTokens: Record<TAuthTokenTypes, string> = {
	confirmToken: CONFIRM_TOKEN,
	userToken: USER_TOKEN,
};
