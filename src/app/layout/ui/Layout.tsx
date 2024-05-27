import { Layout as AntdLayout } from "antd";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { isAuthorizedViewer, tokenService, useFetchViewerQuery } from "entities/viewer";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector } from "shared/lib/hooks";
import { Loader } from "shared/ui";

import styles from "./Layout.module.scss";

const { Content } = AntdLayout;

const links = [pathRoutes.main, pathRoutes.catalog, pathRoutes.about, pathRoutes.rent];

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { pathname } = useLocation();

	const userId = tokenService.getToken("userToken"); // TODO поменять на confirmToken

	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const { isLoading } = useFetchViewerQuery(userId, { skip: !userId });

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	const menuLinks = useMemo(() => {
		if (isAuthorized) {
			return [...links, pathRoutes.profile];
		}

		return links;
	}, [isAuthorized]);

	return (
		<div className={styles.layout}>
			<Header
				menuLinks={menuLinks}
				modificator={styles.header}
				mobileModificator={styles.paddingContent}
			/>

			<Content className={styles.paddingContent}>
				{isLoading ? <Loader className={styles.loader} /> : children || <Outlet />}
			</Content>

			<Footer menuLinks={menuLinks} modificator={styles.footer} />
		</div>
	);
};
