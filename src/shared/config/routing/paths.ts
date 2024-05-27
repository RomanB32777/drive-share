import { EProfileCarsRoutes, EProfileRoutes, ERoutes, TRoutes } from "./types";

// const profileCarsRoute: IRouteProps<EProfileCarsRoutes> = {
// 	path: "cars",
// 	title: "Автомобили",
// 	childRoutes: {
// 		[EProfileCarsRoutes.CarForm]: {
// 			path: ":type/:id?",
// 			title: "Форма создания/редактирования авто",
// 		},
// 	},
// };

// const profileRoute: IRouteProps<EProfileRoutes> = {
// 	path: "/profile",
// 	title: "Профиль",
// 	childRoutes: {
// 		[EProfileRoutes.Account]: { path: "account", title: "Аккаунт" },
// 		// [EProfileRoutes.Documents]: { path: "documents", title: "Документы" },
// 		[EProfileRoutes.Rents]: { path: "rents", title: "Заявки" },
// 		[EProfileRoutes.Cars]: profileCarsRoute,
// 	},
// };

export const pathRoutes: TRoutes = {
	[ERoutes.Main]: { path: "/", title: "Главная" },
	[ERoutes.Profile]: {
		path: "/profile",
		title: "Профиль",
		childRoutes: {
			[EProfileRoutes.Account]: { path: "account", title: "Аккаунт" },
			[EProfileRoutes.Rents]: { path: "rents", title: "Заявки" },
			[EProfileRoutes.Cars]: {
				path: "cars",
				title: "Автомобили",
				childRoutes: {
					[EProfileCarsRoutes.CarForm]: {
						path: ":type/:id?",
						title: "Форма создания/редактирования авто",
					},
				},
			},
		},
	},
	[ERoutes.Auth]: { path: "/auth/:type", title: "Авторизация/Регистрация" },
	[ERoutes.Catalog]: { path: "/catalog", title: "Каталог" },
	[ERoutes.Car]: { path: "/catalog/:id", title: "Страница авто" },
	[ERoutes.Rent]: { path: "/rent", title: "Сдать авто" },
	[ERoutes.About]: { path: "/about", title: "О нас" },
};
