import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

type TReturnType<T> = [T, (name: keyof T, value: string) => void];

// TODO - типизация для T - только объекты
export const useLocalParams = <T>(data?: URLSearchParamsInit): TReturnType<T> => {
	const [searchParams, setSearchParams] = useSearchParams(data);

	const formattedSearchParams = useMemo(() => {
		if (!searchParams.size) {
			// TODO преобразовать в объект с типом T и значением undefined
			return {};
		}

		for (const entry of searchParams.entries()) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const [param, value] = entry;
		}
	}, [searchParams]);

	const handleChangeParams = (paramName: keyof T, value: string) =>
		setSearchParams((params) => {
			params.set(String(paramName), value);

			return params;
		});

	return [formattedSearchParams as T, handleChangeParams];
};
