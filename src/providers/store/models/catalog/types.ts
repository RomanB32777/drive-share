export interface ICar {
	id: number;
	name: string;
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

export interface ICatalogState {
	cars: ICar[];
	car: ICar;
}
