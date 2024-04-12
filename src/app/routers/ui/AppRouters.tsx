import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthPage } from "pages/auth";
import { CarPage } from "pages/car";
import { CatalogPage } from "pages/catalog";
import { MainPage } from "pages/main";
import { ProfilePage } from "pages/profile";
import { pathRoutes } from "shared/const";
import { IComponentWithModificator } from "shared/interfaces";
import { ERoutes, TRoutes } from "shared/types";

export const AppRouters: FC<IComponentWithModificator> = ({
	modificator: containerModificator,
}) => {
	const routes: TRoutes = {
		[ERoutes.Main]: {
			...pathRoutes.main,
			element: <MainPage modificator={containerModificator} />,
		},
		[ERoutes.Profile]: {
			...pathRoutes.profile,
			element: <ProfilePage modificator={containerModificator} />,
		},
		[ERoutes.Auth]: {
			...pathRoutes.auth,
			element: <AuthPage modificator={containerModificator} />,
		},
		[ERoutes.Catalog]: {
			...pathRoutes.catalog,
			element: <CatalogPage modificator={containerModificator} />,
		},
		[ERoutes.Car]: { ...pathRoutes.car, element: <CarPage modificator={containerModificator} /> },
	};

	return (
		<Routes>
			{Object.entries(routes).map(([route, { path, element }]) => (
				<Route key={route} path={path} element={element} />
			))}
		</Routes>
	);
};
