import { EBreakpoints } from "../types";

export const breakpoints: Record<EBreakpoints, number> = {
	[EBreakpoints.Xs]: 320,
	[EBreakpoints.Sm]: 640,
	[EBreakpoints.Md]: 768,
	[EBreakpoints.Lg]: 1024,
	[EBreakpoints.Xl]: 1280,
};
