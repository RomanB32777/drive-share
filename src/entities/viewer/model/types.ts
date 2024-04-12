export interface IViewer {
	id: number;
	username: string;
	email: string;
	name: string;
	password: string;
	surname: string;
	user_role: string;
	confirmationToken: string;
}

export enum EAuthTypes {
	SignIn = "sign-in",
	SignUp = "sign-up",
}

export type TSignInViewer = Pick<IViewer, "password" | "email">;
export type TSignUpViewer = Omit<IViewer, "name" | "surname" | "email" | "password">;
