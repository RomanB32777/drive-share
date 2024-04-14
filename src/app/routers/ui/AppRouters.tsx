import { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AuthPage } from "pages/auth";
import { CarPage } from "pages/car";
import { CatalogPage } from "pages/catalog";
import { MainPage } from "pages/main";
import { ProfilePage } from "pages/profile";
import { ERoutes, TRoutes, pathRoutes } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";

import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouters: FC<IComponentWithModificator> = ({
	modificator: containerModificator,
}) => {
	const { pathname } = useLocation();

	const routes: TRoutes = {
		[ERoutes.Main]: {
			...pathRoutes.main,
			element: <MainPage modificator={containerModificator} />,
		},
		[ERoutes.Profile]: {
			...pathRoutes.profile,
			element: (
				<ProtectedRoute>
					<ProfilePage modificator={containerModificator} />
				</ProtectedRoute>
			),
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

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	return (
		<Routes>
			{Object.entries(routes).map(([route, { path, element }]) => (
				<Route key={route} path={path} element={element} />
			))}
		</Routes>
	);
};
