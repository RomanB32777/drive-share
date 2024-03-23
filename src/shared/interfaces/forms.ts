import { Dayjs } from "dayjs";
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

export interface IPeriodValues {
	date: Dayjs;
	time: Dayjs;
}

export interface IPeriodFilterValues {
	city: string;
	from: IPeriodValues;
	to: IPeriodValues;
}
