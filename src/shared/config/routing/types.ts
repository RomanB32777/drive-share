export enum ERoutes {
	Main = "main",
	Profile = "profile",
	Auth = "auth",
	Catalog = "catalog",
	Car = "car",
	Rent = "rent",
	About = "about",
}

export enum EProfileRoutes {
	Account = "account",
	// Documents = "documents",
	Cars = "cars",
	Rents = "rents",
}

export enum EProfileCarsRoutes {
	CarForm = "carForm",
}

export interface IRoutePropsWithoutChild {
	path: string;
	title: string;
}

export interface IRouteProps extends IRoutePropsWithoutChild {
	// TODO условное поле если не указан Child
	childRoutes?: {
		[key in EProfileRoutes | EProfileCarsRoutes]?: IRouteProps;
	};
	// childRoutes?: Record<ChildRoutes, IRouteProps>;
}

export type TRoutes = Record<ERoutes, IRouteProps>; // IRoutePropsWithoutChild | IRouteProps - TODO не работает

// export type TNonNullableQuery<T> = {
// 	[Prop in keyof T]-?: TNonNullableQuery<NonNullable<T[Prop]>>;
// };
