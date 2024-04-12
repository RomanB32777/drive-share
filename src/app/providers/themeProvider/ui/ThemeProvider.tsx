import { ConfigProvider } from "antd";
import ruLocale from "antd/lib/locale/ru_RU";
import { FC } from "react";

import { IComponentWithChildren } from "shared/interfaces";

import styleVars from "../../../styles/variables.module.scss";

export const ThemeProvider: FC<IComponentWithChildren> = ({ children }) => (
	<ConfigProvider
		locale={ruLocale}
		theme={{
			token: {
				colorPrimary: styleVars.primaryColor,
				colorLink: styleVars.primaryColor,
				colorPrimaryText: styleVars.primaryColor,
				fontFamily: styleVars.primaryFontFamily,
			},
		}}
	>
		{children}
	</ConfigProvider>
);
