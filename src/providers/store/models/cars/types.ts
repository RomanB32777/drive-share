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

export interface ICarsState {
	items: ICar[];
	car: ICar;
}

export interface ICarsQueryParams {
	city?: string;
	from?: string;
	to?: string;
}

export interface IRentData {
	id: number;
	rentBegin: string;
	rentEnd: string;
	renter: number;
	seller: number;
}
