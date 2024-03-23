import type { ButtonHTMLAttributes, FC, MouseEvent } from "react";

import classNames from "classnames";
import { IComponentWithChildren } from "shared/interfaces";

import styles from "./Button.module.scss";

interface IButton extends IComponentWithChildren {
	disabled?: boolean;
	className?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButton> = ({
	children,
	type = "button",
	disabled,
	className,
	onClick,
}) => (
	<button
		className={classNames(styles.button, className, {
			[styles.disabled]: disabled || false,
		})}
		type={type}
		onClick={onClick}
	>
		{children}
	</button>
);
