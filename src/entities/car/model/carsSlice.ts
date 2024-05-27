import { createSlice } from "@reduxjs/toolkit";

import { carsApi } from "../api/carsApi";

import { ICar, ICarsState } from "./types";

export const defaultCar: ICar = {
	id: 0,
	category: "",
	owner: 0,
	description: "",
	parameters: {
		brand: "",
		model: "",
		bodyType: "",
		drive: "",
		engineType: "",
		engineCapacity: 0,
		releaseYear: 0,
		seats: 0,
		mileage: 0,
		transmission: "",
		wheelPosition: "",
	},
	price: {
		basePerDay: 0,
		minRentPeriod: 0,
	},
	produced: "",
	status: "",
	rating: 0,
	mainPhono: "",
	photo: [],
	rentTerms: {
		deposit: 0,
		kilPerDay: 0,
		additionalPayment: 0,
		minDriverExperience: 0,
		minAge: 0,
	},
	address: {
		city: "",
		street: "",
	},
	insurance: {
		ОСАГО: "",
		КАСКО: "",
	},
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
		builder.addMatcher(carsApi.endpoints.fetchCars.matchFulfilled, (state, { payload }) => {
			state.items = payload;
		});
		builder.addMatcher(carsApi.endpoints.fetchCar.matchFulfilled, (state, { payload }) => {
			state.car = payload;
		});
	},
});

export const { actions: carsActions, reducer: carsReducer } = carsSlice;
