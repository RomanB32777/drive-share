import { RouteProps } from "react-router-dom";

import { ERoutes } from "./ERoutes";

export * from "./ERoutes";
export * from "./EHttpMethods";

export type TRoutes = Record<ERoutes, RouteProps & { path: string; title: string }>;
