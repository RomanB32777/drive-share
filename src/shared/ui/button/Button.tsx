import classNames from "classnames";

import type { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren } from "react";

import { IComponentWithModificator } from "../../interfaces";

import styles from "./Button.module.scss";

type TButtonStyles = "primary" | "transparent" | "outline" | "outlinePrimary" | "whiteDark";

interface IButton extends PropsWithChildren, IComponentWithModificator {
	disabled?: boolean;
	style?: TButtonStyles;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

const styleClasses: Record<TButtonStyles, string> = {
	primary: styles.primary,
	transparent: styles.transparent,
	outline: styles.outline,
	outlinePrimary: styles.outlinePrimary,
	whiteDark: styles.whiteDark,
};

export const Button: FC<IButton> = ({
	children,
	type = "button",
	style = "primary",
	disabled,
	modificator,
	onClick,
}) => (
	<button
		className={classNames(styles.button, styleClasses[style], modificator, {
			[styles.disabled]: disabled,
		})}
		type={type}
		disabled={disabled}
		onClick={onClick}
	>
		{children}
	</button>
);
