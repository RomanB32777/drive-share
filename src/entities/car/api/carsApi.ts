import { EHttpMethods, adapterFormData, hhRtkApi, rtkApi } from "shared/api";

import {
	IArea,
	ICar,
	ICarCategory,
	ICarIncome,
	ICarsQueryParams,
	TAddCarToFavorites,
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
		fetchFavoritesCars: build.query<ICar[], ICarsQueryParams>({
			query: (query) => ({
				url: `${carsApiPath}/favorites`,
				params: query,
			}),
			providesTags: ["cars"],
		}),
		fetchCar: build.query<ICar, string>({
			query: (id) => `${carsApiPath}/${id}`,
		}),
		fetchCategories: build.query<ICarCategory[], void>({
			query: () => `${carsApiPath}/categories`,
		}),
		fetchIncomeCars: build.query<ICarIncome[], void>({
			query: () => `${carsApiPath}/income`,
		}),
		createCar: build.mutation<ICar, TCarCreateForm>({
			query: (data) => ({
				url: carsApiPath,
				method: EHttpMethods.POST,
				body: adapterFormData(data),
			}),
			invalidatesTags: ["cars"],
		}),
		editCar: build.mutation<ICar, TCarCreateForm>({
			query: (data) => ({
				url: carsApiPath,
				method: EHttpMethods.PUT,
				body: adapterFormData(data),
			}),
			invalidatesTags: ["cars"],
		}),
		deleteCar: build.mutation<void, number>({
			query: (carId) => ({
				url: `${carsApiPath}/${carId}`,
				method: EHttpMethods.DELETE,
			}),
			invalidatesTags: ["cars"],
		}),
		addToFavorites: build.mutation<ICar, TAddCarToFavorites>({
			query: (data) => ({
				url: `${carsApiPath}/favorites`,
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
	useFetchIncomeCarsQuery,
	useLazyFetchIncomeCarsQuery,
	useFetchFavoritesCarsQuery,
	useLazyFetchFavoritesCarsQuery,
	useCreateCarMutation,
	useEditCarMutation,
	useDeleteCarMutation,
	useAddToFavoritesMutation,
} = carsApi;

export const { useFetchAreasQuery, useLazyFetchAreasQuery } = areasApi;
