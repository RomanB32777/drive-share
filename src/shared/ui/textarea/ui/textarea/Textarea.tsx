import { Input as AntdInput } from "antd";
import { TextAreaProps } from "antd/es/input";
import { TextAreaRef } from "antd/es/input/TextArea";
import classNames from "classnames";
import { ReactNode, forwardRef, useId } from "react";

import { IComponentWithModificator } from "../../../../interfaces";

import styles from "./Textarea.module.scss";

export interface ITextareaProps extends TextAreaProps, IComponentWithModificator {
	label?: ReactNode;
}

export const Textarea = forwardRef<TextAreaRef, ITextareaProps>(
	({ label, className, classNames: elementClassNames, modificator, id: propId, ...props }, ref) => {
		const id = useId();
		const elementId = propId || id;

		return (
			<div className={modificator}>
				{label && (
					<label htmlFor={elementId} className={styles.label}>
						{label}
					</label>
				)}

				<AntdInput.TextArea
					id={elementId}
					ref={ref}
					className={classNames(styles.textarea, className)}
					classNames={{
						...elementClassNames,
						textarea: classNames(styles.root, elementClassNames?.textarea),
					}}
					{...props}
				/>
			</div>
		);
	}
);

Textarea.displayName = "Textarea";
