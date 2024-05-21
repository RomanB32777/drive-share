import classNames from "classnames";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isAuthorizedViewer, signInLink } from "entities/viewer";
import { HamburgerIcon } from "shared/assets/icons";
import { IRouteProps } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";
import { useActions, useAppSelector } from "shared/lib/hooks";
import { Button } from "shared/ui";

import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Sidebar } from "../sidebar";

import styles from "./Header.module.scss";

interface IHeader extends IComponentWithModificator {
	menuLinks: IRouteProps[];
	mobileModificator?: string;
}

export const Header: FC<IHeader> = ({ menuLinks, modificator, mobileModificator }) => {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(true);

	const { logout } = useActions();
	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const handleCollapsed = () => setCollapsed((prev) => !prev);

	const handleButtonClick = () => {
		if (isAuthorized) {
			logout();
		} else {
			navigate(signInLink);
		}
	};

	const navButton = (
		<Button style="outline" modificator={styles.button} onClick={handleButtonClick}>
			{isAuthorized ? "Выйти" : "Войти"}
		</Button>
	);

	return (
		<>
			<header className={styles.headerWrapper}>
				<div className={modificator}>
					<div className={styles.content}>
						<Logo />

						<Button style="transparent" modificator={styles.hamburger} onClick={handleCollapsed}>
							<HamburgerIcon />
						</Button>

						<nav className={styles.navigation}>
							<Navigation
								links={menuLinks}
								modificator={styles.menuWrapper}
								className={styles.menu}
							/>

							{navButton}
						</nav>
					</div>
				</div>
			</header>

			<Sidebar collapsed={collapsed} onCollapsed={handleCollapsed}>
				<div className={classNames(styles.sidebarContent, mobileModificator)}>
					<Navigation
						mode="inline"
						links={menuLinks}
						modificator={styles.mobileMenuWrapper}
						className={styles.mobileMenu}
						onClick={handleCollapsed}
					/>

					<div onClick={handleCollapsed} className={styles.sidebarButton}>
						{navButton}
					</div>
				</div>
			</Sidebar>
		</>
	);
};
