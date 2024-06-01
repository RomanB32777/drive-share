import { IUser } from "shared/types";

export interface IReview {
	id: string;
	carId: number;
	rating: number;
	comment: string;
	user: IUser;
	createdAt: string;
}

export interface IReviewFormData extends Omit<IReview, "id" | "createdAt" | "user"> {
	userId: IUser["id"];
}
