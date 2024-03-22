import { rootActions, TAppDispatch, TRootState } from "providers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const useAppDispatch: () => TAppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(rootActions, dispatch);
};

export { useAppDispatch, useAppSelector, useActions };
