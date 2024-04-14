import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppLayout } from "app/layout";
import { StoreProvider } from "app/providers/storeProvider";
import { ThemeProvider } from "app/providers/themeProvider";
import { pathRoutes } from "shared/config/routing";

export const App: FC = () => {
	return (
		<StoreProvider>
			<BrowserRouter basename={pathRoutes.main.path}>
				<ThemeProvider>
					<AppLayout />
				</ThemeProvider>
			</BrowserRouter>
		</StoreProvider>
	);
};
