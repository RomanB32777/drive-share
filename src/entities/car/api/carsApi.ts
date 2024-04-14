import { EHttpMethods, hhRtkApi, rtkApi } from "shared/api";

import { ICar, ICarCategory } from "../model/types";

import { IArea, ICarsQueryParams, IRentData } from "./types";

const carsApiPath = "car";

const areasApi = hhRtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchAreas: build.query<IArea, string>({ query: (areaId) => `areas/${areaId}` }),
	}),
});

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
		createRent: build.mutation<IRentData, Omit<IRentData, "id">>({
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

export const { useFetchAreasQuery, useLazyFetchAreasQuery } = areasApi;
