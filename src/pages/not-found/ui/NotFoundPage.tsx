import { Result } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

import { pathRoutes } from "shared/config/routing";
import { Button } from "shared/ui";

import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="К сожалению, страница, которую вы посетили, не существует."
			extra={
				<Link to={pathRoutes.main.path}>
					<Button style="primary" modificator={styles.button}>
						Вернуться на главную
					</Button>
				</Link>
			}
		/>
	);
};
