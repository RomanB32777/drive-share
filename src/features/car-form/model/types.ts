import { Control } from "react-hook-form";

import { TCarCreateForm } from "entities/car";

export interface ICarFormType {
	control: Control<TCarCreateForm>;
}
