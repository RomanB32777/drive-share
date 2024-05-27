import { Spin, SpinProps } from "antd";
import classNames from "classnames";
import { FC } from "react";

import styles from "./Loader.module.scss";

export const Loader: FC<SpinProps> = ({ className, ...props }) => (
	<div className={classNames(className, styles.loaderWrapper)}>
		<Spin size="large" {...props} />
	</div>
);
