import { FC } from "react";
import {
	IndexRouteProps,
	PathRouteProps,
	Route,
	RouteObject,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { AuthPage } from "pages/auth";
import { CarPage } from "pages/car";
import { CatalogPage } from "pages/catalog";
import { MainPage } from "pages/main";
import { NotFoundPage } from "pages/not-found";
import { ProfilePage } from "pages/profile";
import { ERoutes, pathRoutes } from "shared/config/routing";

import { AppLayout } from "../../../layout";

import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter: FC = () => {
	const routes: Record<ERoutes, RouteObject> = {
		[ERoutes.Main]: {
			...pathRoutes.main,
			index: true,
			element: <MainPage />,
		},
		[ERoutes.Profile]: {
			...pathRoutes.profile,
			element: <ProtectedRoute />,
			children: [
				{
					index: true,
					element: <ProfilePage />,
				},
			],
		},
		[ERoutes.Auth]: {
			...pathRoutes.auth,
			element: <AuthPage />,
		},
		[ERoutes.Catalog]: {
			...pathRoutes.catalog,
			element: <CatalogPage />,
		},
		[ERoutes.Car]: { ...pathRoutes.car, element: <CarPage /> },
	};

	const createElementRoutes = (routesArray: RouteObject[]) =>
		routesArray.map(({ children = [], index, ...route }, routeIndex) => {
			const routeProps = { index, ...route };

			const key = `${route.path}-${routeIndex}`;

			if (index) {
				return <Route key={key} {...(routeProps as IndexRouteProps)} />;
			}

			return (
				<Route key={key} {...(routeProps as PathRouteProps)}>
					{createElementRoutes(children)}
				</Route>
			);
		});

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path={pathRoutes.main.path}
				element={<AppLayout />}
				errorElement={
					<AppLayout>
						<NotFoundPage />
					</AppLayout>
				}
			>
				{createElementRoutes(Object.values(routes))}
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};
