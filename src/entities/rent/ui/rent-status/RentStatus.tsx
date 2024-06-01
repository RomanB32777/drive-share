import classNames from "classnames";
import { FC } from "react";

import { rentStatusTitles } from "../../config/constants";
import { ERentStatus } from "../../model/types";

import styles from "./RentStatus.module.scss";

interface IRentStatus {
	status: ERentStatus;
}

const statusStyles: Record<ERentStatus, string> = {
	[ERentStatus.New]: styles.new,
	[ERentStatus.Operation]: styles.operation,
	[ERentStatus.Confirm]: styles.confirm,
	[ERentStatus.Cancel]: styles.cancel,
	[ERentStatus.Complete]: styles.complete,
};

export const RentStatus: FC<IRentStatus> = ({ status }) => (
	<div className={classNames(styles.status, statusStyles[status])}>{rentStatusTitles[status]}</div>
);
