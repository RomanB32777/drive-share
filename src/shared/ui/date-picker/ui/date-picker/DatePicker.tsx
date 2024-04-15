import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";
import classNames from "classnames";
import { FC, useState } from "react";

import styles from "./DatePicker.module.scss";

export interface IDatePicker extends DatePickerProps {
	renderSuffixIcon?: (isFocus: boolean) => React.ReactNode;
}

export const DatePicker: FC<IDatePicker> = ({
	suffixIcon,
	rootClassName,
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
			rootClassName={classNames(styles.picker, rootClassName)}
			suffixIcon={renderSuffixIcon?.(isFocus) || suffixIcon}
			onOpenChange={handleOpenPopup}
			{...props}
		/>
	);
};
