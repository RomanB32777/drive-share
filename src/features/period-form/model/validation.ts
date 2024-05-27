import dayjs from "dayjs";
import { RegisterOptions } from "react-hook-form";

import { TPeriodFilterValues } from "entities/car";

export const validation: Partial<
	Record<keyof TPeriodFilterValues, RegisterOptions<TPeriodFilterValues>>
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
