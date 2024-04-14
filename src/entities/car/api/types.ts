export interface ICarsQueryParams {
	size?: number;
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

export interface IArea {
	id: string;
	parent_id: string | null;
	name: string;
	areas: IArea[];
}
