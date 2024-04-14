import { Spin } from "antd";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import { IComponentWithModificator } from "../../interfaces";

import styles from "./ContentLayout.module.scss";

interface IContentLayout extends IComponentWithModificator, PropsWithChildren {
	isLoading?: boolean;
}

export const ContentLayout: FC<IContentLayout> = ({ children, isLoading, modificator }) => {
	return (
		<div className={classNames(styles.container, modificator)}>
			{isLoading ? <Spin className={styles.spinner} /> : children}
		</div>
	);
};
