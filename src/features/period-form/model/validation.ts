import dayjs from "dayjs";
import { RegisterOptions } from "react-hook-form";

import { IPeriodFilterValues } from "shared/interfaces";

export const validation: Partial<
	Record<keyof IPeriodFilterValues, RegisterOptions<IPeriodFilterValues>>
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
