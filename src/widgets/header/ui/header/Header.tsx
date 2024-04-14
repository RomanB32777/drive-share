import { FC, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { EAuthTypes, isAuthorizedViewer } from "entities/viewer";
import { HamburgerIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/config/routing";
import { IComponentWithModificator } from "shared/interfaces";
import { useAppSelector } from "shared/lib/hooks";
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

	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const handleCollapsed = () => setCollapsed((prev) => !prev);

	const handleButtonClick = () => {
		const navigateUrl = isAuthorized
			? pathRoutes.profile.path
			: generatePath(pathRoutes.auth.path, { type: EAuthTypes.SignIn });

		navigate(navigateUrl);
	};

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
							<Navigation modificator={styles.menuWrapper} className={styles.menu} />

							<Button style="outline" modificator={styles.button} onClick={handleButtonClick}>
								{isAuthorized ? "Профиль" : "Войти"}
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
