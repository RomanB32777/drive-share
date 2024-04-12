import { EAuthTypes } from "./types";

export const authTypeTitles: Record<EAuthTypes, string> = {
	[EAuthTypes.SignIn]: "Авторизация",
	[EAuthTypes.SignUp]: "Регистрация",
};
