import { Layout as AntdLayout } from "antd";
import { FC, PropsWithChildren, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { tokenService, useFetchViewerQuery } from "entities/viewer";
import { Loader } from "shared/ui";

import styles from "./Layout.module.scss";

const { Content } = AntdLayout;

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { pathname } = useLocation();

	const userId = tokenService.getToken("userToken"); // TODO поменять на confirmToken

	const { isLoading } = useFetchViewerQuery(userId, { skip: !userId });

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	return (
		<div className={styles.layout}>
			<Header modificator={styles.header} mobileModificator={styles.paddingContent} />

			<Content className={styles.paddingContent}>
				{isLoading ? <Loader /> : children || <Outlet />}
			</Content>

			<Footer modificator={styles.footer} />
		</div>
	);
};
