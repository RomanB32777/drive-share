import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import { IComponentWithModificator } from "../../interfaces";
import { Loader } from "../loader";

import styles from "./ContentLayout.module.scss";

interface IContentLayout extends IComponentWithModificator, PropsWithChildren {
	isLoading?: boolean;
	isPageContent?: boolean;
}

export const ContentLayout: FC<IContentLayout> = ({
	children,
	isLoading,
	isPageContent,
	modificator,
}) => {
	return (
		<div className={classNames(styles.container, modificator)}>
			{isLoading ? (
				<Loader className={classNames({ [styles.pageLoader]: isPageContent })} />
			) : (
				children
			)}
		</div>
	);
};
