import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

import "dayjs/locale/ru";

dayjs.locale("ru");
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(duration);

export const joinDateTime = (date: Dayjs, time: Dayjs): Dayjs => {
	return date.set("hour", time.hour()).set("minute", time.minute());
};

export const reformatDate = (date: string, format = "DD.MM.YYYY") => {
	const dayjsFormat = dayjs(date);

	if (!dayjsFormat.isValid()) {
		return date;
	}

	return dayjsFormat.format(format);
};

export const diffDates = (from: string, to: string) => {
	const fromDate = dayjs(from);
	const toDate = dayjs(to);

	return toDate.diff(fromDate);
};

export const getDateDuration = (ms: number) => dayjs.duration(ms).humanize();

export const getFromNow = (date: string) => dayjs(date).fromNow();
