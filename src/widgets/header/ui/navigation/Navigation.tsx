import { Menu, MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import classNames from "classnames";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { pathRoutes } from "shared/const";
import { IComponentWithModificator } from "shared/interfaces";

import styles from "./Navigation.module.scss";

const menuItems: ItemType[] = [pathRoutes.main, pathRoutes.catalog].map(({ path, title }) => ({
	title,
	key: path,
	label: <NavLink to={path}>{title}</NavLink>,
}));

type TNavigation = Omit<MenuProps, "selectedKeys" | "items"> & IComponentWithModificator;

export const Navigation: FC<TNavigation> = ({
	mode = "horizontal",
	modificator,
	className,
	...props
}) => {
	const { pathname } = useLocation();

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
