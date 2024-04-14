import {
	BaseQueryFn,
	MutationActionCreatorResult,
	MutationDefinition,
} from "@reduxjs/toolkit/query";

type TMutationDefinition<ResultType> = MutationDefinition<unknown, BaseQueryFn, string, ResultType>;

export const handleMutationResult = <
	ResultType, // TODO доделать
	T extends TMutationDefinition<ResultType> = TMutationDefinition<ResultType>,
>(
	mutationResult: Awaited<MutationActionCreatorResult<T>>
) => {
	if ("data" in mutationResult) {
		return mutationResult.data;
	}
};
