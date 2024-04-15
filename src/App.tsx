import { FC } from "react";

import { AppRouter } from "app/providers/routerProvider";
import { StoreProvider } from "app/providers/storeProvider";
import { ThemeProvider } from "app/providers/themeProvider";

export const App: FC = () => {
	return (
		<StoreProvider>
			<ThemeProvider>
				<AppRouter />
			</ThemeProvider>
		</StoreProvider>
	);
};
