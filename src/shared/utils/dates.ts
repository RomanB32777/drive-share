import { Dayjs } from "dayjs";

export const joinDateTime = (date: Dayjs, time: Dayjs): Dayjs => {
	return date.set("hour", time.hour()).set("minute", time.minute());
};
