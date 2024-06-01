import { createSlice } from "@reduxjs/toolkit";

import { rentsApi } from "../api/rentsApi";

import { ERentStatus, IRentsState } from "./types";

const initialState: IRentsState = {
	rents: [],
	// TODO очистить, когда будет готова ручка на бэке
	statuses: [
		{
			id: 1,
			value: ERentStatus.New,
			title: "Новые",
		},
		{
			id: 2,
			value: ERentStatus.Operation,
			title: "Эксплуатация",
		},
		{
			id: 3,
			value: ERentStatus.Confirm,
			title: "Подтвержденные",
		},
		{
			id: 4,
			value: ERentStatus.Complete,
			title: "Завершенные",
		},
		{
			id: 4,
			value: ERentStatus.Cancel,
			title: "Отмененные",
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
