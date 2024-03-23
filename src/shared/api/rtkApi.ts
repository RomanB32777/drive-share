import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseApiUrl = "https:/test.api.com/";

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
