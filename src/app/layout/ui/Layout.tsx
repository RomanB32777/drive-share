import { Layout as AntdLayout } from "antd";
import classNames from "classnames";
import { FC } from "react";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";

import { AppRouters, ScrollToTop } from "../../routers";

import styles from "./Layout.module.scss";

const { Content } = AntdLayout;

export const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Header
				modificator={classNames(styles.container, styles.header)}
				mobileModificator={styles.paddingContent}
			/>

			<Content className={styles.paddingContent}>
				<AppRouters modificator={styles.container} />
				<ScrollToTop />
			</Content>

			<Footer modificator={classNames(styles.container, styles.footer)} />
		</div>
	);
};
