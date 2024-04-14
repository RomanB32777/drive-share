import { ReducersMapObject } from "@reduxjs/toolkit";

import { carsActions, carsReducer } from "entities/car";
import { viewerActions, viewerReducer } from "entities/viewer";
import { hhRtkApi, rtkApi } from "shared/api";

import { IStateSchema } from "./stateSchema";

export const rootReducers: ReducersMapObject<IStateSchema> = {
	viewer: viewerReducer,
	cars: carsReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
	[hhRtkApi.reducerPath]: hhRtkApi.reducer,
};

export const rootActions = {
	...viewerActions,
	...carsActions,
};
