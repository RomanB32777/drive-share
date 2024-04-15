import { Menu, MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import classNames from "classnames";
import { FC, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { isAuthorizedViewer } from "entities/viewer";
import { pathRoutes } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";
import { useAppSelector } from "shared/lib/hooks";

import styles from "./Navigation.module.scss";

type TNavigation = Omit<MenuProps, "selectedKeys" | "items"> & IComponentWithModificator;

export const Navigation: FC<TNavigation> = ({
	mode = "horizontal",
	modificator,
	className,
	...props
}) => {
	const { pathname } = useLocation();

	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const menuItems: ItemType[] = useMemo(() => {
		const links = [pathRoutes.main, pathRoutes.catalog];

		if (isAuthorized) {
			links.push(pathRoutes.profile);
		}

		return links.map(({ path, title }) => ({
			title,
			key: path,
			label: <NavLink to={path}>{title}</NavLink>,
		}));
	}, [isAuthorized]);

	return (
		<div className={classNames(styles.menuWrapper, modificator)}>
			<Menu
				mode={mode}
				selectedKeys={[pathname]}
				items={menuItems}
				className={classNames(styles.menu, className)}
				{...props}
			/>
		</div>
	);
};
