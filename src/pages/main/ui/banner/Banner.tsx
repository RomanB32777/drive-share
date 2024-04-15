import { stringify } from "qs";
import { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { CatalogFilter } from "widgets/catalog-filter";
import bannerImage from "shared/assets/images/banner.png";
import { pathRoutes } from "shared/config/routing";
import { IPeriodFilterValues } from "shared/interfaces";

import styles from "./Banner.module.scss";

export const Banner: FC = () => {
	const navigate = useNavigate();

	const handleFilterSubmit = (values: IPeriodFilterValues) => {
		const catalogLink = generatePath(pathRoutes.catalog.path);

		navigate({ pathname: catalogLink, search: stringify(values) });
	};

	return (
		<div className={styles.banner}>
			<img className={styles.image} src={bannerImage} alt="background" />

			<div className={styles.content}>
				<CatalogFilter modificator={styles.filter} onSubmit={handleFilterSubmit} />
			</div>
		</div>
	);
};
