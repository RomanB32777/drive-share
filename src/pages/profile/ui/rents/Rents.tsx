import { FC } from "react";
import { Link, generatePath } from "react-router-dom";

import { RentFilter } from "features/rents-filter";
import { RentCard, selectRents, useFetchRentsQuery } from "entities/rent";
import { selectViewer } from "entities/viewer";
import { DirectionArrowIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector } from "shared/lib/hooks";
import { Button, ContentLayout } from "shared/ui";

import styles from "./Rents.module.scss";

export const Rents: FC = () => {
	const viewer = useAppSelector(selectViewer);
	const rents = useAppSelector(selectRents);

	const { isLoading } = useFetchRentsQuery({ userId: viewer.id });

	const { path, childRoutes } = pathRoutes.profile;

	// TODO не работает типизация, полный путь с учетом родительского пути
	// TODO не меняется значения таба - useEffect возможно в помощь
	const accountPath = generatePath(`${path}/${childRoutes?.account?.path}`);

	return (
		<ContentLayout isLoading={isLoading} isPageContent>
			<div className={styles.wrapper}>
				<div className={styles.sidebar}>
					<Link to={accountPath}>
						<Button style="outline" modificator={styles.linkButton}>
							<>
								<span className={styles.arrow}>
									<DirectionArrowIcon />
								</span>
								Аккаунт
							</>
						</Button>
					</Link>

					<RentFilter />
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>Все заявки ({rents.length || 0})</h3>

					<div className={styles.cards}>
						{rents.map((item) => (
							<RentCard key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
		</ContentLayout>
	);
};
