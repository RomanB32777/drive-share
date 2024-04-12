import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";
import classNames from "classnames";
import { FC, useState } from "react";

import { IComponentWithModificator } from "../../interfaces";

import styles from "./DatePicker.module.scss";

interface IDatePicker extends DatePickerProps, IComponentWithModificator {
	renderSuffixIcon?: (isFocus: boolean) => React.ReactNode;
}

export const DatePicker: FC<IDatePicker> = ({
	suffixIcon,
	modificator,
	onOpenChange,
	renderSuffixIcon,
	...props
}) => {
	const [isFocus, setIsFocus] = useState(false);

	const handleIsFocus = () => setIsFocus((prev) => !prev);

	const handleOpenPopup = (isOpen: boolean) => {
		handleIsFocus();
		onOpenChange?.(isOpen);
	};

	return (
		<AntdDatePicker
			onOpenChange={handleOpenPopup}
			rootClassName={classNames(styles.picker, modificator, { [styles.focused]: isFocus })}
			suffixIcon={renderSuffixIcon?.(isFocus) || suffixIcon}
			{...props}
		/>
	);
};
