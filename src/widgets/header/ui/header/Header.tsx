import { FC, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { EAuthTypes } from "entities/viewer";
import { HamburgerIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/const";
import { IComponentWithModificator } from "shared/interfaces";
import { Button } from "shared/ui";

import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Sidebar } from "../sidebar";

import styles from "./Header.module.scss";

interface IHeader extends IComponentWithModificator {
	mobileModificator?: string;
}

export const Header: FC<IHeader> = ({ modificator, mobileModificator }) => {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(true);

	const handleCollapsed = () => setCollapsed((prev) => !prev);

	const handleAuthButton = () =>
		navigate(generatePath(pathRoutes.auth.path, { type: EAuthTypes.SignIn }));

	return (
		<>
			<header className={styles.headerWrapper}>
				<div className={modificator}>
					<div className={styles.content}>
						<Logo />

						<div className={styles.hamburgerWrapper}>
							<Button style="transparent" modificator={styles.hamburger} onClick={handleCollapsed}>
								<HamburgerIcon />
							</Button>
						</div>

						<nav className={styles.navigation}>
							<Navigation modificator={styles.menuWrapper} className={styles.menu} />

							<Button style="outline" modificator={styles.authButton} onClick={handleAuthButton}>
								Войти
							</Button>
						</nav>
					</div>
				</div>
			</header>

			<Sidebar collapsed={collapsed} onCollapsed={handleCollapsed}>
				<div className={mobileModificator}>
					<Navigation
						mode="inline"
						modificator={styles.mobileMenuWrapper}
						className={styles.mobileMenu}
						onClick={handleCollapsed}
					/>
				</div>
			</Sidebar>
		</>
	);
};
