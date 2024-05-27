import { createSlice } from "@reduxjs/toolkit";

import { rentsApi } from "../api/rentsApi";

import { IRentsState } from "./types";

const initialState: IRentsState = {
	rents: [],
	// TODO очистить, когда будет готова ручка на бэке
	statuses: [
		{
			id: 1,
			value: "all",
			title: "Все заявки",
		},
		{
			id: 2,
			value: "new",
			title: "Новые",
		},
		{
			id: 3,
			value: "exploitation",
			title: "Эксплуатация",
		},
	],
};

export const rentsSlice = createSlice({
	name: "rents",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			rentsApi.endpoints.fetchRentStatuses.matchFulfilled,
			(state, { payload }) => {
				state.statuses = payload;
			}
		);
		builder.addMatcher(rentsApi.endpoints.fetchRents.matchFulfilled, (state, { payload }) => {
			state.rents = payload;
		});
	},
});

export const { actions: rentsActions, reducer: rentsReducer } = rentsSlice;
