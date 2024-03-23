import { FC, useState } from "react";

import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";
import classNames from "classnames";

import styles from "./DatePicker.module.scss";

interface IDatePicker extends DatePickerProps {
	renderSuffixIcon?: (isFocus: boolean) => React.ReactNode;
}

export const DatePicker: FC<IDatePicker> = ({
	suffixIcon,
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
			rootClassName={classNames(styles.picker, { [styles.focused]: isFocus })}
			suffixIcon={renderSuffixIcon?.(isFocus) || suffixIcon}
			{...props}
		/>
	);
};
