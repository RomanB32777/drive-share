import { TimePicker as AntdTimePicker, TimePickerProps } from "antd";
import classNames from "classnames";
import { FC, useState } from "react";

import { IComponentWithModificator } from "../../../../interfaces";

import styles from "./TimePicker.module.scss";

export interface ITimePicker extends TimePickerProps, IComponentWithModificator {
	renderSuffixIcon?: (isFocus: boolean) => React.ReactNode;
}

export const TimePicker: FC<ITimePicker> = ({
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
		<AntdTimePicker
			onOpenChange={handleOpenPopup}
			suffixIcon={renderSuffixIcon?.(isFocus) || suffixIcon}
			rootClassName={classNames(styles.picker, modificator, { [styles.focused]: isFocus })}
			{...props}
		/>
	);
};
