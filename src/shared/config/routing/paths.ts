import { ERoutes, TRoutes } from "./types";

export const pathRoutes: TRoutes = {
	[ERoutes.Main]: { path: "/", title: "Главная" },
	[ERoutes.Profile]: { path: "/profile", title: "Профиль" },
	[ERoutes.Auth]: { path: "/auth/:type", title: "Авторизация/Регистрация" },
	[ERoutes.Catalog]: { path: "/catalog", title: "Каталог" },
	[ERoutes.Car]: { path: "/catalog/:id", title: "Страница авто" },
	[ERoutes.Rent]: { path: "/rent", title: "Сдать авто" },
	[ERoutes.About]: { path: "/about", title: "О нас" },
};
