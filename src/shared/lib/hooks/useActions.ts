import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { rootActions } from "app/providers/storeProvider";

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(rootActions, dispatch);
};
