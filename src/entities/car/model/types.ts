export interface ICar {
	id: number;
	category: string;
	brand: string;
	model: string;
	owner: number;
	price: number;
	photo: string;
	produced: string;
	status: string;
	rating: number;
}

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

export interface ICarsState {
	items: ICar[];
	car: ICar;
}
