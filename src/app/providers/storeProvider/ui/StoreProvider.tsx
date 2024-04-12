import { FC } from "react";
import { Provider } from "react-redux";

import { IComponentWithChildren } from "shared/interfaces";

import { store } from "../config/store";

export const StoreProvider: FC<IComponentWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
