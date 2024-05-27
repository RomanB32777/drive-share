export interface IViewer {
	id: number;
	email: string;
	name: string;
	password: string;
	surname: string;
	user_role: string;
	confirmationToken: string;
	username?: string;
	avatar?: string;
	birthday_date?: string;
	phone?: string;
	nationality?: string;
	driving_experience?: number;
	identification_number?: number;
}

export enum EAuthTypes {
	SignIn = "sign-in",
	SignUp = "sign-up",
}

export type TAuthByEmail = Pick<IViewer, "email" | "password">;
export type TSignUpViewer = Pick<IViewer, "name" | "surname"> & TAuthByEmail;

export enum EProfileTabs {
	Account = "account",
	Documents = "documents",
	Rents = "rents",
	Cars = "cars",
}

export type TViewerProfile = Pick<
	IViewer,
	| "id"
	| "name"
	| "surname"
	| "avatar"
	| "email"
	| "birthday_date"
	| "phone"
	| "nationality"
	| "driving_experience"
	| "identification_number"
>;

export interface IAuthTokens {
	confirmToken: string;
	userToken: string; // TODO убрать, так как это костыль
}

export type TAuthTokenTypes = keyof IAuthTokens;
