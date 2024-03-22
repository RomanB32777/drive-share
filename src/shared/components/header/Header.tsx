import { FC } from "react";

import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { pathRoutes } from "shared/constants";
import { IComponentWithModificator } from "shared/interfaces";

import styles from "./Header.module.scss";

const menuLinks = [pathRoutes.main, pathRoutes.catalog];

export const Header: FC<IComponentWithModificator> = ({ modificator }) => {
	return (
		<header className={styles.headerWrapper}>
			<div className={classNames(styles.header, modificator)}>
				<h1>
					<Link className={styles.title} to={pathRoutes.main.path}>
						DRIVESHARE
					</Link>
				</h1>
				<div className={styles.menu}>
					<nav>
						<ul className={styles.links}>
							{menuLinks.map(({ path, title }, index) => (
								<li key={index}>
									<NavLink className={styles.item} to={path}>
										{title}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<button className={styles.btn}>
						<NavLink style={{ color: "#000" }} to={pathRoutes.auth.path}>
							Войти
						</NavLink>
					</button>
				</div>
			</div>
		</header>
	);
};
