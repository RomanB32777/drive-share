import { EHttpMethods, adapterFormData, hhRtkApi, rtkApi } from "shared/api";

import {
	IArea,
	ICar,
	ICarCategory,
	ICarIncome,
	ICarsQueryParams,
	TCarCreateForm,
} from "../model/types";

const carsApiPath = "car";

const areasApi = hhRtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchAreas: build.query<IArea, string>({ query: (areaId) => `areas/${areaId}` }),
	}),
});

export const carsApi = rtkApi.enhanceEndpoints({ addTagTypes: ["cars"] }).injectEndpoints({
	endpoints: (build) => ({
		// TODO адаптировать данные под фронт
		fetchCars: build.query<ICar[], ICarsQueryParams>({
			query: (query) => ({
				url: carsApiPath,
				params: query,
			}),
			providesTags: ["cars"],
		}),
		fetchCar: build.query<ICar, string>({
			query: (id) => `${carsApiPath}/${id}`,
		}),
		fetchCategories: build.query<ICarCategory[], void>({
			query: () => "categories",
		}),
		fetchIncomeCars: build.query<ICarIncome[], void>({
			query: () => "income",
		}),
		createCar: build.mutation<ICar, TCarCreateForm>({
			query: (data) => ({
				url: carsApiPath,
				method: EHttpMethods.POST,
				body: adapterFormData(data),
			}),
			invalidatesTags: ["cars"],
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
	useFetchIncomeCarsQuery,
	useLazyFetchIncomeCarsQuery,
	useCreateCarMutation,
} = carsApi;

export const { useFetchAreasQuery, useLazyFetchAreasQuery } = areasApi;
