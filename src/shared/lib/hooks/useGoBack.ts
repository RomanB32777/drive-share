import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { pathRoutes } from "../../config/routing";

export const useGoBack = (to = pathRoutes.main.path) => {
	const navigate = useNavigate();

	const goBack = useCallback(() => {
		const isCanGoBack = window.history.state.idx !== 0;

		if (isCanGoBack) {
			navigate(-1);
		} else {
			navigate(to);
		}
	}, [to, navigate]);

	return goBack;
};
