import { IUserIdQueryParam } from "shared/api";

export interface ICarParameters {
	brand: string;
	model: string;
	bodyType: string;
	drive: string;
	engineType: string;
	engineCapacity: number;
	releaseYear: number;
	seats: number;
	mileage: number;
	transmission: string;
	wheelPosition: string;
}

export interface ICarRentTerms {
	deposit: number;
	kilPerDay: number;
	additionalPayment: number;
	minDriverExperience: number;
	minAge: number;
}

export interface ICarAddress {
	city: string;
	street: string;
}

export interface ICarPrice {
	basePerDay: number;
	minRentPeriod: number;
}

export interface ICarInsurance {
	ОСАГО: string;
	КАСКО: string;
}

export interface ICar {
	id: number;
	category: string;
	owner: number;
	mainPhono: string;
	photo: string[];
	produced: string;
	status: string;
	rating: number;
	description: string;
	parameters: ICarParameters;
	price: ICarPrice;
	rentTerms: ICarRentTerms;
	address: ICarAddress;
	insurance: ICarInsurance;
}

export type TCarKeys = keyof ICar;

export interface ICarCategory {
	id: string;
	name: string;
	photo: string;
	minPrice: number;
	maxPrice?: number;
}

export interface ICarIncome {
	id: string;
	income: number;
	photo: string;
	model: string;
	year: number;
}

export interface ICarsQueryParams extends IUserIdQueryParam {
	size?: number;
	city?: string;
	from?: string;
	to?: string;
}

export interface IArea {
	id: string;
	parent_id: string | null;
	name: string;
	areas: IArea[];
}

export interface ICarsState {
	items: ICar[];
	car: ICar;
}

export type TPeriodFilterValues = Required<Omit<ICarsQueryParams, "size">>;

export type TCarCreateForm = Omit<ICar, "id">;
