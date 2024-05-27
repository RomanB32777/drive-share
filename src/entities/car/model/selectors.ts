import { createSelector } from "@reduxjs/toolkit";

import { defaultCar } from "./carsSlice";

const selectBase = createSelector(
	(state: TRootState) => state,
	({ cars }) => cars
);

export const selectCars = createSelector(selectBase, ({ items }) =>
	items.map((item) => ({ ...defaultCar, ...item }))
);
export const selectCar = createSelector(selectBase, ({ car }) => ({ ...defaultCar, ...car }));
