import { EHttpMethods, rtkApi } from "shared/api";

import { IRent, IRentStatus, IRentsQueryParams, TRentFormData } from "../model/types";

const rentsApiPath = "rent";

export const rentsApi = rtkApi.enhanceEndpoints({ addTagTypes: ["rents"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchRents: build.query<IRent[], IRentsQueryParams>({
			query: (query) => ({
				url: rentsApiPath,
				params: query,
			}),
			providesTags: ["rents"],
		}),
		fetchRentStatuses: build.query<IRentStatus[], void>({
			query: () => `${rentsApiPath}/status`,
			providesTags: ["rents"],
		}),
		createRent: build.mutation<IRent, TRentFormData>({
			query: (data) => ({
				url: `${rentsApiPath}/new`,
				method: EHttpMethods.POST,
				body: data,
			}),
			invalidatesTags: ["rents"],
		}),
	}),
});

export const {
	useFetchRentsQuery,
	useLazyFetchRentsQuery,
	useFetchRentStatusesQuery,
	useLazyFetchRentStatusesQuery,
	useCreateRentMutation,
} = rentsApi;
