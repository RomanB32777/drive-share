import { createSelector } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const selectBase = createSelector(
	(state: TRootState) => state,
	({ rents }) => rents
);

// TODO убрать map
export const selectRents = createSelector(
	selectBase,
	({ rents }) =>
		rents.map((rent) => ({
			...rent,
			createdAt: dayjs().add(-14, "day").toISOString(),
			rentBegin: dayjs().add(-6, "day").toISOString(),
		}))
	// rents
);
export const selectStatuses = createSelector(selectBase, ({ statuses }) => statuses);
