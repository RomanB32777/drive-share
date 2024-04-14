import { rtkApi } from "shared/api";

import { IUser } from "../model/types";

const apiPath = "user";

export const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchUser: build.query<IUser, number>({
			query: (id) => `${apiPath}/${id}`,
		}),
	}),
});

export const { useFetchUserQuery, useLazyFetchUserQuery } = userApi;
