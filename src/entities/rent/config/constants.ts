import { ERentStatus } from "../model/types";

export const rentStatusTitles: Record<ERentStatus, string> = {
	[ERentStatus.New]: ERentStatus.New,
	[ERentStatus.Operation]: ERentStatus.Operation,
	[ERentStatus.Confirm]: ERentStatus.Confirm,
	[ERentStatus.Cancel]: "отменена",
	[ERentStatus.Complete]: "Завершена",
};
