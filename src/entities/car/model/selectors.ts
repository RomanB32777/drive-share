import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
	(state: TRootState) => state,
	({ cars }) => cars
);

export const selectCars = createSelector(selectBase, ({ items }) => items);
export const selectCar = createSelector(selectBase, ({ car }) => car);
