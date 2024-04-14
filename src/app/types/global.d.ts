declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare type TRootState = ReturnType<
	typeof import("../providers/storeProvider/config/store").store.getState
>;
declare type TAppDispatch = typeof import("../providers/storeProvider/config/store").store.dispatch;
