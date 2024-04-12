import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "app/layout";
import { StoreProvider } from "app/providers/storeProvider";
import { ThemeProvider } from "app/providers/themeProvider";
import { pathRoutes } from "shared/const";

export const App: FC = () => {
	return (
		<BrowserRouter basename={pathRoutes.main.path}>
			<StoreProvider>
				<ThemeProvider>
					<AppLayout />
				</ThemeProvider>
			</StoreProvider>
		</BrowserRouter>
	);
};
