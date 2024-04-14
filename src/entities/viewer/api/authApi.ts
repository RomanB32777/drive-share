import { EHttpMethods } from "shared/api";
import { rtkApi } from "shared/api/rtkApi";

import { IViewer, TAuthByEmail, TSignUpViewer } from "../model/types";

const apiPath = "auth";

export const authApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		signIn: build.mutation<IViewer, TAuthByEmail>({
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
	}),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
