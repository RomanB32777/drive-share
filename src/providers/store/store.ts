import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { rtkApi } from "shared/api";

import { catalogActions, catalogReducer } from "./models";
import { IStateSchema } from "./types";

const rootReducers: ReducersMapObject<IStateSchema> = {
	catalog: catalogReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
};

export const store = configureStore({
	reducer: rootReducers,
	devTools: true,
});

export const rootActions = {
	...catalogActions,
};

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
