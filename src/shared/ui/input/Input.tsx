import { Input as AntdInput, InputProps } from "antd";
import classNames from "classnames";
import { ReactNode } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { IFormElement } from "../../interfaces";

import styles from "./Input.module.scss";

interface IInput<T extends FieldValues>
	extends Omit<InputProps, "name" | "value" | "onChange">,
		IFormElement<T> {
	label?: ReactNode;
}

export const Input = <T extends FieldValues>({
	label,
	className,
	control,
	name,
	rules,
	...inputProps
}: IInput<T>) => {
	// AntdInput.Password;
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<>
					{/* fieldState: { error, invalid } */}
					{label && <p className={styles.label}>{label}</p>}
					<AntdInput
						value={value}
						className={classNames(styles.input, className)}
						// classNames={{ input: styles.input }}
						onChange={onChange}
						allowClear
						{...inputProps}
					/>
				</>
			)}
		/>
	);
};
