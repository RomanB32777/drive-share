import { Spin, SpinProps } from "antd";
import { FC } from "react";

import styles from "./Loader.module.scss";

export const Loader: FC<SpinProps> = (props) => (
	<div className={styles.loaderWrapper}>
		<Spin size="large" {...props} />
	</div>
);
