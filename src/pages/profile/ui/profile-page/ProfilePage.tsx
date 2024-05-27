import { FC, useCallback, useMemo } from "react";
import { Outlet, useNavigate, useMatch, matchPath, useLocation } from "react-router-dom";

import { IRouteProps, pathRoutes } from "shared/config/routing";
import { useComponentMount, usePageTitle } from "shared/lib/hooks";
import { Tabs } from "shared/ui";

import styles from "./ProfilePage.module.scss";

export const ProfilePage: FC = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const profileMatch = useMatch(pathRoutes.profile);

	const { path, childRoutes } = pathRoutes.profile;

	useComponentMount(() => {
		if (profileMatch) {
			navigate(childRoutes?.account?.path || "");
		}
	});

	const checkMatchPath = useCallback(
		(routeValues: IRouteProps[], rootPath: string): IRouteProps | undefined => {
			return routeValues.find((route) => {
				const currMatch = matchPath({ path: `${rootPath}/${route.path}` }, pathname);

				if (!currMatch) {
					return route.childRoutes
						? !!checkMatchPath(Object.values(route.childRoutes), `${rootPath}/${route.path}`)
						: false;
				}

				return true;
			});
		},
		[pathname]
	);

	const currentProfileRoute = useMemo(() => {
		if (childRoutes) {
			return checkMatchPath(Object.values(childRoutes), path);
		}
	}, [checkMatchPath, childRoutes, path]);

	const handleChangeTabs = (keyPath: string) => navigate(keyPath);

	usePageTitle(currentProfileRoute?.title || "");

	return (
		<div className={styles.wrapper}>
			<Tabs
				defaultActiveKey={currentProfileRoute?.path}
				onChange={handleChangeTabs}
				items={
					childRoutes &&
					Object.values(childRoutes).map((route) => ({
						key: route.path,
						label: route.title,
						// disabled,
					}))
				}
			/>

			<Outlet />
		</div>
	);
};
