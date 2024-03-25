import { Control, FieldValue, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface IFormElement<FormControl extends FieldValues> {
	name: Path<FormControl>;
	control: Control<FormControl>;
	rules?: Omit<
		RegisterOptions<FormControl, Path<FormControl>>,
		"disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
	>;
	error?: string | null;
	value?: FieldValue<FormControl>;
}

export interface IPeriodFilterValues {
	city: string;
	from: string;
	to: string;
}

export type TFilterDateKeys = Exclude<keyof IPeriodFilterValues, "city">;
