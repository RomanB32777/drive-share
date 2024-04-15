import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { isAuthorizedViewer, signInLink } from "entities/viewer";
import { useAppSelector } from "shared/lib/hooks";

export const ProtectedRoute: FC<PropsWithChildren> = () => {
	const isAuthorized = useAppSelector(isAuthorizedViewer);

	return isAuthorized ? <Outlet /> : <Navigate to={signInLink} />;
};
