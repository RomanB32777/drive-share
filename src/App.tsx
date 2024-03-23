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
	[ERoutes.Main]: { ...pathRoutes.main, element: <MainPage modificator={styles.container} /> },
	[ERoutes.Admin]: { ...pathRoutes.admin, element: <AdminPage modificator={styles.container} /> },
	[ERoutes.Auth]: { ...pathRoutes.auth, element: <AuthPage modificator={styles.container} /> },
	[ERoutes.Catalog]: {
		...pathRoutes.catalog,
		element: <CatalogPage modificator={styles.container} />,
	},
	[ERoutes.Car]: { ...pathRoutes.car, element: <CarPage modificator={styles.container} /> },
};

const App: FC = () => {
	return (
		<BrowserRouter basename={pathRoutes.main.path}>
			<Provider store={store}>
				<div className={styles.app}>
					<Header modificator={classNames(styles.container, styles.header)} />

					<main>
						<Routes>
							{Object.entries(routes).map(([route, { path, element }]) => (
								<Route key={route} path={path} element={element} />
							))}
						</Routes>
					</main>

					<Footer modificator={classNames(styles.container, styles.footer)} />
				</div>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
