export * from "./EBreakpoints";

// TODO точно ли это верное решение по FSD перенести из сущности юзера сюда
export interface IUser {
	id: number;
	name: string;
	surname: string;
	user_role: string;
	username?: string;
	avatar?: string;
}
