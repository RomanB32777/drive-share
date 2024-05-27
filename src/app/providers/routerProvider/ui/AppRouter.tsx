import { FC } from "react";
import {
	IndexRouteProps,
	Outlet,
	PathRouteProps,
	Route,
	RouteObject,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { AboutPage } from "pages/about";
import { AuthPage } from "pages/auth";
import { CarPage } from "pages/car";
import { CatalogPage } from "pages/catalog";
import { MainPage } from "pages/main";
import { NotFoundPage } from "pages/not-found";
import { ProfileCars, ProfilePage, ProfileRents } from "pages/profile";
import { RentPage } from "pages/rent";
import { AccountForm } from "features/account-form";
import { CarForm } from "features/car-form";
import { ERoutes, pathRoutes } from "shared/config/routing";

import { AppLayout } from "../../../layout";

import { ProtectedRoute } from "./ProtectedRoute";

const routes: Record<ERoutes, RouteObject> = {
	[ERoutes.Main]: {
		...pathRoutes.main,
		index: true,
		element: <MainPage />,
	},
	[ERoutes.Profile]: {
		element: <ProtectedRoute />,
		children: [
			{
				...pathRoutes.profile,
				element: <ProfilePage />,
				children: [
					// TODO не работают подсказки из childRoutes
					{ ...pathRoutes.profile.childRoutes?.account, element: <AccountForm /> },
					{ ...pathRoutes.profile.childRoutes?.rents, element: <ProfileRents /> },
					{
						...pathRoutes.profile.childRoutes?.cars,
						element: <Outlet />,
						children: [
							{
								index: true,
								element: <ProfileCars />,
							},
							{
								...pathRoutes.profile.childRoutes?.cars?.childRoutes?.carForm,
								element: <CarForm />,
							},
						],
					},
				],
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
	[ERoutes.Rent]: { ...pathRoutes.rent, element: <RentPage /> },
	[ERoutes.About]: { ...pathRoutes.about, element: <AboutPage /> },
};

export const AppRouter: FC = () => {
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
