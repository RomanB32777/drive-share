import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import carsApi from "./carsApi";
import { ICar, ICarsState } from "./types";

const defaultCar: ICar = {
	id: 0,
	category: "",
	brand: "",
	model: "",
	owner: 0,
	price: 0,
	produced: "",
	status: "",
	rating: 0,
	photo: "",
};

const initialState: ICarsState = {
	items: [],
	car: defaultCar,
};

export const carsSlice = createSlice({
	name: "cars",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			carsApi.endpoints.fetchCars.matchFulfilled,
			(state, { payload }: PayloadAction<ICar[]>) => {
				state.items = payload;
			}
		);
		builder.addMatcher(
			carsApi.endpoints.fetchCar.matchFulfilled,
			(state, { payload }: PayloadAction<ICar>) => {
				state.car = payload;
			}
		);
	},
});

export const { actions: carsActions, reducer: carsReducer } = carsSlice;
