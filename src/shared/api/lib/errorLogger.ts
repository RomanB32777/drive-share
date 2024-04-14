import { Middleware, PayloadAction, isRejectedWithValue } from "@reduxjs/toolkit";
import { notification } from "antd";

import { IPayloadActionData } from "../model/types";

export const queryErrorLogger: Middleware = () => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		const { payload } = action as PayloadAction<IPayloadActionData>;

		notification.error({ message: `${payload.status || 500} - ${action.error.message}` });
	}

	return next(action);
};
