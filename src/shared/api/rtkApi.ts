import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseApiHost = process.env.REACT_APP_HOSTNAME || "http://localhost:8080/";

const createBaseQuery = (baseUrl = baseApiHost) =>
	retry(
		fetchBaseQuery({
			baseUrl,
		}),
		{
			maxRetries: 3,
		}
	);

export const rtkApi = createApi({
	reducerPath: "api",
	baseQuery: createBaseQuery(),
	endpoints: () => ({}),
});

export const hhRtkApi = createApi({
	reducerPath: "hhApi",
	baseQuery: createBaseQuery("https://api.hh.ru/"),
	endpoints: () => ({}),
});
