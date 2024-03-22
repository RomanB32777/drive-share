import { FC } from "react";

import classNames from "classnames";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import { AdminPage, AuthPage, CarPage, CatalogPage, MainPage } from "./pages";
import { store } from "./providers";
import { Footer, Header } from "./shared/components";
import { pathRoutes } from "./shared/constants";
import { ERoutes, TRoutes } from "./shared/types";

const routes: TRoutes = {
	[ERoutes.Main]: { ...pathRoutes.main, element: <MainPage /> },
	[ERoutes.Admin]: { ...pathRoutes.admin, element: <AdminPage /> },
	[ERoutes.Auth]: { ...pathRoutes.auth, element: <AuthPage /> },
	[ERoutes.Catalog]: { ...pathRoutes.catalog, element: <CatalogPage /> },
	[ERoutes.Car]: { ...pathRoutes.car, element: <CarPage /> },
};

const App: FC = () => {
	return (
		<BrowserRouter basename={pathRoutes.main.path}>
			<Provider store={store}>
				<div className={styles.app}>
					<Header modificator={styles.container} />
					<main className={classNames(styles.container, styles.main)}>
						<Routes>
							{Object.entries(routes).map(([route, { path, element }]) => (
								<Route key={route} path={path} element={element} />
							))}
						</Routes>
					</main>
					<Footer modificator={styles.container} />
				</div>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
