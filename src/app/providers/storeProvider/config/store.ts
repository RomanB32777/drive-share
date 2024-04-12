import { configureStore } from "@reduxjs/toolkit";

import { rtkApi, rtkQueryErrorLogger } from "shared/api";

import { rootReducers } from "./reducerManager";

export const store = configureStore({
	reducer: rootReducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat([rtkQueryErrorLogger, rtkApi.middleware]),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
