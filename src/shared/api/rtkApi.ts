import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "http://localhost:5000/api/";

export const rtkApi = createApi({
	reducerPath: "api",
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: baseApiUrl,
		}),
		{
			maxRetries: 3,
		}
	),
	endpoints: () => ({}),
});
