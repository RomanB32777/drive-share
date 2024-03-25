import { rtkApi } from "shared/api";
import { EHttpMethods } from "shared/types";

import { ICar, ICarsQueryParams, IRentData } from "./types";

const carsApi = rtkApi.enhanceEndpoints({ addTagTypes: ["cars"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchCars: build.query<ICar[], ICarsQueryParams>({
			query: (query) => ({
				url: "todos",
				params: query,
			}),
			providesTags: ["cars"],
		}),
		fetchCar: build.query<ICar, string>({
			query: (id) => `todos/${id}`,
		}),
		createRent: build.mutation<ICar, Omit<IRentData, "id">>({
			query: (data) => ({
				url: "rent/new",
				method: EHttpMethods.POST,
				body: data,
			}),
		}),
	}),
});

export const {
	useFetchCarsQuery,
	useLazyFetchCarsQuery,
	useFetchCarQuery,
	useLazyFetchCarQuery,
	useCreateRentMutation,
} = carsApi;

export default carsApi;
