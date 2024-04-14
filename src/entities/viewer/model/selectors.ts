import { createSelector } from "@reduxjs/toolkit";

export const selectBase = createSelector(
	(state: TRootState) => state,
	({ viewer }) => viewer
);

export const isAuthorizedViewer = createSelector(selectBase, ({ id }) => !!id);
