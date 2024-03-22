import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import catalogApi from "./catalogApi";
import { ICar, ICatalogState } from "./types";

const defaultCar: ICar = {
	id: 0,
	category: "",
	brand: "",
	model: "",
	owner: 0,
	price: 3530,
	produced: "",
	status: "",
	rating: 0,
	photo: "",
	name: "Chery OMODA C5, 2022",
};

const initialState: ICatalogState = {
	cars: [
		defaultCar,
		defaultCar,
		defaultCar,
		defaultCar,
		defaultCar,
		defaultCar,
		defaultCar,
		defaultCar,
	],
	car: defaultCar,
};

export const catalogSlice = createSlice({
	name: "catalog",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			catalogApi.endpoints.fetchCars.matchFulfilled,
			(state, { payload }: PayloadAction<ICar[]>) => {
				state.cars = payload;
			}
		);
	},
});

export const { actions: catalogActions, reducer: catalogReducer } = catalogSlice;
