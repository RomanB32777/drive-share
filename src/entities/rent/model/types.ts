import { IUserIdQueryParam } from "shared/api";

export interface IRent {
	id: string;
	carId: number;
	rentBegin: string;
	rentEnd: string;
	status: string;
	createdAt: string;
	model: string;
	photo: string;
	renter: number;
	seller: number;
}

export interface IRentStatus {
	id: number;
	value: string;
	title: string; // TODO переделать на name и потом адаптер прикрутить, чтобы в radio затащить
}

export interface IRentsQueryParams extends IUserIdQueryParam {
	status?: string;
	from?: string;
	to?: string;
}

export type TRentFormData = Pick<IRent, "carId" | "rentBegin" | "rentEnd" | "renter" | "seller">;

export type TRentFilterValues = Required<Omit<IRentsQueryParams, "userId">>;

export interface IRentsState {
	rents: IRent[];
	statuses: IRentStatus[];
}
