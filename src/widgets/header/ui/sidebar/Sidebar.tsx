import { Layout as AntdLayout } from "antd";
import { FC } from "react";

import { IComponentWithChildren } from "shared/interfaces";

import styles from "./Sidebar.module.scss";

const { Sider } = AntdLayout;

interface ISidebar extends IComponentWithChildren {
	collapsed: boolean;
	onCollapsed?: () => void;
}

export const Sidebar: FC<ISidebar> = ({ collapsed, children, onCollapsed }) => {
	return (
		<>
			<Sider
				collapsible
				breakpoint="lg"
				collapsedWidth="0"
				theme="light"
				collapsed={collapsed}
				trigger={null}
				className={styles.sider}
				width={300}
			>
				{children}
			</Sider>
			{!collapsed && <div className={styles.overlay} onClick={onCollapsed} />}
		</>
	);
};
