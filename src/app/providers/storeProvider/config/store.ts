import { configureStore } from "@reduxjs/toolkit";

import { hhRtkApi, rtkApi, queryErrorLogger } from "shared/api";

import { rootReducers } from "./reducerManager";

export const store = configureStore({
	reducer: rootReducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat([queryErrorLogger, rtkApi.middleware, hhRtkApi.middleware]),
});
