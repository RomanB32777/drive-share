import { AriaAttributes, ReactNode } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type TFormElement<
	FormControl extends FieldValues,
	IElementProps extends AriaAttributes = AriaAttributes,
> = UseControllerProps<FormControl> &
	Omit<IElementProps, "value" | "onChange"> & {
		label?: ReactNode;
	};

// TODO убрать из shared в слайс models в features
export interface IPeriodFilterValues {
	city: string;
	from: string;
	to: string;
}

export type TFilterDateKeys = Exclude<keyof IPeriodFilterValues, "city">;
