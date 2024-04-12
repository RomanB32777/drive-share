import { RouteProps } from "react-router-dom";

import { ERoutes } from "./ERoutes";

export * from "./ERoutes";
export * from "./EHttpMethods";
export * from "./EBreakpoints";

export type TRoutes = Record<ERoutes, RouteProps & { path: string; title: string }>;
