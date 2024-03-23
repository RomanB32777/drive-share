import { FC, useState } from "react";

import { TimePicker as AntdTimePicker, TimePickerProps } from "antd";
import classNames from "classnames";

import styles from "./TimePicker.module.scss";

interface ITimePicker extends TimePickerProps {
	renderSuffixIcon?: (isFocus: boolean) => React.ReactNode;
}

export const TimePicker: FC<ITimePicker> = ({
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
		<AntdTimePicker
			onOpenChange={handleOpenPopup}
			suffixIcon={renderSuffixIcon?.(isFocus) || suffixIcon}
			rootClassName={classNames(styles.picker, { [styles.focused]: isFocus })}
			{...props}
		/>
	);
};
