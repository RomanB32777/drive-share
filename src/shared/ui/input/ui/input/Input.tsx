import { Input as AntdInput, InputProps, InputRef } from "antd";
import classNames from "classnames";
import { ReactNode, forwardRef, useId } from "react";

import { IComponentWithModificator } from "../../../../interfaces";

import styles from "./Input.module.scss";

export interface IInput extends InputProps, IComponentWithModificator {
	label?: ReactNode;
}

export const Input = forwardRef<InputRef, IInput>(
	(
		{ label, className, classNames: inputClassNames, modificator, id: propId, ...inputProps },
		ref
	) => {
		const id = useId();
		const elementId = propId || id;

		return (
			<div className={modificator}>
				{label && (
					<label htmlFor={elementId} className={styles.label}>
						{label}
					</label>
				)}

				<AntdInput
					id={elementId}
					ref={ref}
					className={classNames(styles.input, className)}
					classNames={{
						...inputClassNames,
						input: classNames(styles.root, inputClassNames?.input),
					}}
					{...inputProps}
				/>
			</div>
		);
	}
);

Input.displayName = "Input";
