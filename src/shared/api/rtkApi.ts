import { isRejectedWithValue, Middleware, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { notification } from "antd";

const baseApiUrl = "https://jsonplaceholder.typicode.com/";

// TODO определить тип данных, возвращаемых с бэка в том числе для отображения сообщений ошибок
interface IPayloadActionData {
	status: number;
	data: unknown;
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		const { payload } = action as PayloadAction<IPayloadActionData>;

		notification.error({ message: `${payload.status || 500} - ${action.error.message}` });
	}

	return next(action);
};

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
