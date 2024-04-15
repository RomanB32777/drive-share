export enum ERoutes {
	Main = "main",
	Profile = "profile",
	Auth = "auth",
	Catalog = "catalog",
	Car = "car",
}

interface IRouteProps {
	path: string;
	title: string;
}

export type TRoutes = Record<ERoutes, IRouteProps>;
