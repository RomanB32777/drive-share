import { FC } from "react";

import { Spin } from "antd";

import styles from "./ContentLayout.module.scss";

interface IContentLayout {
	children: React.ReactNode;
	isLoading?: boolean;
}

export const ContentLayout: FC<IContentLayout> = ({ children, isLoading }) => {
	return (
		<div className={styles.container}>
			{isLoading ? <Spin className={styles.spinner} /> : children}
		</div>
	);
};
