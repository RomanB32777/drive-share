import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IRouteProps } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";

import styles from "./Footer.module.scss";

interface IFooter extends IComponentWithModificator {
	menuLinks: IRouteProps[];
}

export const Footer: FC<IFooter> = ({ menuLinks, modificator }) => {
	return (
		<footer className={styles.footer}>
			<div className={modificator}>
				<nav>
					<ul className={styles.menu}>
						{menuLinks.map(({ path, title }, index) => (
							<li key={index}>
								<NavLink to={path}>{title}</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<p className={styles.copyright}>© 2023 ООО «Драйвшер»</p>
			</div>
		</footer>
	);
};
