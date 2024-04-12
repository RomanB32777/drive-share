import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { TAppDispatch, TRootState, rootActions } from "app/providers/storeProvider";

const useAppDispatch: () => TAppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(rootActions, dispatch);
};

export { useAppDispatch, useAppSelector, useActions };
