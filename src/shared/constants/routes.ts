import { ERoutes, TRoutes } from "../types";

export const pathRoutes: TRoutes = {
	[ERoutes.Main]: { path: "/", title: "Главная" },
	[ERoutes.Admin]: { path: "/admin", title: "Admin" },
	[ERoutes.Auth]: { path: "/auth", title: "Auth" },
	[ERoutes.Catalog]: { path: "/catalog", title: "Каталог" },
	[ERoutes.Car]: { path: "/catalog/:id", title: "Страница авто" },
};
