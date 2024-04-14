import { ConfigProvider } from "antd";
import ruLocale from "antd/lib/locale/ru_RU";
import { FC, PropsWithChildren } from "react";

import styleVars from "../../../styles/variables.module.scss";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
	<ConfigProvider
		locale={ruLocale}
		theme={{
			token: {
				colorPrimary: styleVars.primaryColor,
				colorLink: styleVars.primaryColor,
				colorPrimaryText: styleVars.primaryColor,
				fontFamily: styleVars.primaryFontFamily,
				colorBorder: styleVars.inputBorderColor,
			},
		}}
	>
		{children}
	</ConfigProvider>
);
