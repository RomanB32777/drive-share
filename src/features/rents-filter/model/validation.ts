import dayjs from "dayjs";
import { RegisterOptions } from "react-hook-form";

import { TRentFilterValues } from "entities/rent";

export const validation: Partial<
	Record<keyof TRentFilterValues, RegisterOptions<TRentFilterValues>>
> = {
	from: {
		deps: "to",
		validate: (date, { to }) =>
			dayjs(date).isBefore(to) || "Дата начала не может быть больше даты завершения",
	},
	to: {
		deps: "from",
		validate: (date, { from }) =>
			dayjs(from).isBefore(date) || "Дата завершения не может быть меньше даты начала",
	},
};
