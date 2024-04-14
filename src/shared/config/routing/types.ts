import { RouteProps } from "react-router-dom";

export enum ERoutes {
	Main = "main",

	Profile = "profile",

	Auth = "auth",

	Catalog = "catalog",
	Car = "car",
}

interface ICustomRouteProps {
	path: string;
	title: string;
}

export type TRoutes = Record<ERoutes, RouteProps & ICustomRouteProps>;
