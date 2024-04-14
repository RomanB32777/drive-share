import { Spin } from "antd";
import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet, generatePath } from "react-router-dom";

import { EAuthTypes, isAuthorizedViewer, tokenService, useFetchViewerQuery } from "entities/viewer";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector } from "shared/lib/hooks";

export const ProtectedRoute: FC<PropsWithChildren> = () => {
	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const userId = tokenService.getToken("userToken"); // TODO поменять на confirmToken

	const { isLoading } = useFetchViewerQuery(userId, { skip: !userId });

	if (!isAuthorized && isLoading) {
		return <Spin />;
	}

	return isAuthorized ? (
		<Outlet />
	) : (
		<Navigate to={generatePath(pathRoutes.auth.path, { type: EAuthTypes.SignIn })} />
	);
};
