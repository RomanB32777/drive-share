import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "../api/authApi";
import { viewerApi } from "../api/viewerApi";
import { tokenService } from "../lib/tokenService";

import { IViewer } from "./types";

const defaultUser: IViewer = {
	id: 0,
	email: "",
	name: "",
	password: "",
	surname: "",
	user_role: "",
	confirmationToken: "",
};

export const viewerSlice = createSlice({
	name: "viewer",
	initialState: defaultUser,
	reducers: {
		logout() {
			tokenService.deleteTokens();
			return defaultUser;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(viewerApi.endpoints.fetchViewer.matchFulfilled, (state, { payload }) => {
			state = payload;
			return state;
		});

		builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
			state = payload;
			return state;
		});

		builder.addMatcher(authApi.endpoints.signUp.matchFulfilled, (state, { payload }) => {
			state = payload;
			return state;
		});
	},
});

export const { actions: viewerActions, reducer: viewerReducer } = viewerSlice;
