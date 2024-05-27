import { Menu, MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import classNames from "classnames";
import { FC, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IRouteProps } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";

import styles from "./Navigation.module.scss";

interface INavigation extends Omit<MenuProps, "selectedKeys" | "items">, IComponentWithModificator {
	links: IRouteProps[];
}

export const Navigation: FC<INavigation> = ({
	mode = "horizontal",
	modificator,
	links,
	className,
	...props
}) => {
	const { pathname } = useLocation();

	// TODO соответствие пути открытой страницы роут сущности
	// useMatch(pathRoutes.car.path);
	// useMatches();

	const menuItems: ItemType[] = useMemo(
		() =>
			links.map(({ path, title }) => ({
				title,
				key: path,
				label: <NavLink to={path}>{title}</NavLink>,
			})),
		[links]
	);

	return (
		<div className={classNames(styles.wrapper, modificator)}>
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
