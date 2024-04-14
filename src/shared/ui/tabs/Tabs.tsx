import { Tabs as AntdTabs, TabsProps } from "antd";
import classNames from "classnames";
import { FC } from "react";

import styles from "./Tabs.module.scss";

export const Tabs: FC<TabsProps> = ({ className, ...props }) => (
	<AntdTabs className={classNames(styles.tabs, className)} {...props} />
);
