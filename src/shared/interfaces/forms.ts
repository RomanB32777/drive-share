import { AriaAttributes, ReactNode } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type TFormElement<
	FormControl extends FieldValues,
	IElementProps extends AriaAttributes = AriaAttributes,
> = UseControllerProps<FormControl> &
	Omit<IElementProps, "value" | "onChange"> & {
		label?: ReactNode;
	};
