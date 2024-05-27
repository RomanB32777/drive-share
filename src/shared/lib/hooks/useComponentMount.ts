import { useEffect, useRef } from "react";

export const useComponentMount = (callback: () => void): void => {
	const callbackRef = useRef(callback);

	useEffect(() => callbackRef.current(), []);
};
