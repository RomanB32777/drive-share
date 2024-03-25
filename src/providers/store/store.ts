import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { rtkApi, rtkQueryErrorLogger } from "shared/api";

import { carsActions, carsReducer } from "./models";
import { IStateSchema } from "./types";

const rootReducers: ReducersMapObject<IStateSchema> = {
	cars: carsReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
};

export const store = configureStore({
	reducer: rootReducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat([rtkQueryErrorLogger, rtkApi.middleware]),
});

export const rootActions = {
	...carsActions,
};

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
