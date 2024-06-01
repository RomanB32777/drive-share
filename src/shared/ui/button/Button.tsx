import classNames from "classnames";

import type { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren } from "react";

import { IComponentWithModificator } from "../../interfaces";

import styles from "./Button.module.scss";

type TButtonStyles =
	| "primary"
	| "transparent"
	| "outline"
	| "outlinePrimary"
	| "white"
	| "whiteDark";

type TButtonSizes = "base" | "xl";

interface IButton extends PropsWithChildren, IComponentWithModificator {
	disabled?: boolean;
	style?: TButtonStyles;
	size?: TButtonSizes;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

const styleClasses: Record<TButtonStyles, string> = {
	primary: styles.primary,
	transparent: styles.transparent,
	outline: styles.outline,
	outlinePrimary: styles.outlinePrimary,
	white: styles.white,
	whiteDark: styles.whiteDark,
};

const sizeClasses: Record<TButtonSizes, string> = {
	base: styles.baseSize,
	xl: styles.xlSize,
};

export const Button: FC<IButton> = ({
	children,
	type = "button",
	style = "primary",
	size = "xl",
	disabled,
	modificator,
	onClick,
}) => (
	<button
		className={classNames(styles.button, styleClasses[style], sizeClasses[size], modificator, {
			[styles.disabled]: disabled,
		})}
		type={type}
		disabled={disabled}
		onClick={onClick}
	>
		{children}
	</button>
);
