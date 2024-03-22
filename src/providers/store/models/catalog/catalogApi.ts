import { rtkApi } from "shared/api";

import { ICar } from "./types";

const apiPath = "catalog";

const catalogApi = rtkApi.enhanceEndpoints({ addTagTypes: ["catalog"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchCars: build.query<ICar[], void>({
			query: () => `/${apiPath}`,
			providesTags: ["catalog"],
		}),
		fetchCar: build.query<ICar, string>({
			query: (id) => `/${apiPath}/${id}`,
		}),
	}),
});

export const { useFetchCarsQuery, useLazyFetchCarsQuery, useFetchCarQuery, useLazyFetchCarQuery } =
	catalogApi;

export default catalogApi;
