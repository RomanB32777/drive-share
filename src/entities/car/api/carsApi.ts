import { rtkApi } from "shared/api";
import { EHttpMethods } from "shared/types";

import { ICar, ICarCategory } from "../model/types";

import { ICarsQueryParams, IRentData } from "./types";

const carsApiPath = "todos";

export const carsApi = rtkApi.enhanceEndpoints({ addTagTypes: ["cars"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchCars: build.query<ICar[], ICarsQueryParams>({
			query: (query) => ({
				url: `${carsApiPath}`,
				params: query,
			}),
			providesTags: ["cars"],
		}),
		fetchCar: build.query<ICar, string>({
			query: (id) => `${carsApiPath}/${id}`,
		}),
		fetchCategories: build.query<ICarCategory[], void>({
			query: () => `categories`,
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
	useFetchCategoriesQuery,
	useLazyFetchCategoriesQuery,
	useCreateRentMutation,
} = carsApi;
