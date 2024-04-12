import { rtkApi } from "shared/api/rtkApi";
import { EHttpMethods } from "shared/types";

import { IViewer, TSignInViewer, TSignUpViewer } from "../model/types";

const apiPath = "auth";

export const authApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		signIn: build.mutation<IViewer, TSignInViewer>({
			query: (viewerInfo) => ({
				url: `${apiPath}/sign-in`,
				method: EHttpMethods.POST,
				body: viewerInfo,
			}),
		}),

		signUp: build.mutation<IViewer, TSignUpViewer>({
			query: (viewerInfo) => ({
				url: `${apiPath}/sign-up`,
				method: EHttpMethods.POST,
				body: viewerInfo,
			}),
		}),

		// checkToken: build.query<IUserWithToken, string>({
		// 	query: (tokenId) => `/${apiPath}/check/${tokenId}`,
		// }),

		// verifyToken: build.query<IUserTokenPayload, string>({
		// 	query: (token) => `/${apiPath}/verify/${token}`,
		// }),
	}),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
