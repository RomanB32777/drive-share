import { Radio as AntdRadio, RadioProps } from "antd";
import classNames from "classnames";
import { AriaAttributes, ReactNode, forwardRef, useId } from "react";

import { IComponentWithModificator } from "../../../../interfaces";

import styles from "./Radio.module.scss";

interface IRadioItem {
	value: unknown;
	title: ReactNode;
}

export interface IRadioProps extends RadioProps, AriaAttributes, IComponentWithModificator {
	items: IRadioItem[];
	label?: ReactNode;
}

export const Radio = forwardRef<HTMLDivElement, IRadioProps>(
	({ items, label, className, modificator, id: propId, required, ...radioProps }, ref) => {
		const id = useId();
		const elementId = propId || id;

		return (
			<div className={classNames(styles.wrapper, modificator)}>
				{label && (
					<label htmlFor={elementId} className={styles.label}>
						{label}
						{required && <span className={styles.asterisk}>*</span>}
					</label>
				)}

				<AntdRadio.Group
					id={elementId}
					ref={ref}
					className={classNames(styles.radioGroup, className)}
					{...radioProps}
				>
					{items.map(({ value, title }, index) => (
						<AntdRadio key={`${value}-${index}`} rootClassName={styles.item} value={value}>
							{title}
						</AntdRadio>
					))}
				</AntdRadio.Group>
			</div>
		);
	}
);

Radio.displayName = "Radio";
