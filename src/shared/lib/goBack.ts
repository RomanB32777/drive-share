import { NavigateFunction } from "react-router-dom";

import { pathRoutes } from "../config/routing";

// TODO переделать в хук с вызовом useNavigate ?
export const goBack = (navigate: NavigateFunction, to = pathRoutes.main.path) => {
	const isCanGoBack = window.history.state.idx !== 0;

	if (isCanGoBack) {
		navigate(-1);
	} else {
		navigate(to);
	}
};
