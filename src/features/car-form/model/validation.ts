import { RegisterOptions } from "react-hook-form";

import { ICarAddress, ICarParameters, ICarPrice, ICarRentTerms } from "entities/car";
import { defaultStringRule } from "shared/const";

export const carParametersValidation: Partial<Record<keyof ICarParameters, RegisterOptions>> = {
	brand: { ...defaultStringRule, required: true },
	model: { ...defaultStringRule, required: true },
	bodyType: { ...defaultStringRule, required: true },
	engineType: { ...defaultStringRule, required: true },
	engineCapacity: { valueAsNumber: true, required: true },
	seats: { valueAsNumber: true, required: true },
	drive: { ...defaultStringRule, required: true },
	releaseYear: { valueAsNumber: true, required: true },
	mileage: { valueAsNumber: true, required: true },
	transmission: { ...defaultStringRule, required: true },
	wheelPosition: { ...defaultStringRule, required: true },
};

export const carRentTermsValidation: Record<keyof ICarRentTerms, RegisterOptions> = {
	deposit: { valueAsNumber: true },
	kilPerDay: { valueAsNumber: true },
	additionalPayment: { valueAsNumber: true },
	minDriverExperience: { valueAsNumber: true },
	minAge: { valueAsNumber: true },
};

export const carAddressValidation: Record<keyof ICarAddress, RegisterOptions> = {
	city: defaultStringRule,
	street: defaultStringRule,
};

export const carPriceValidation: Record<keyof ICarPrice, RegisterOptions> = {
	basePerDay: { valueAsNumber: true },
	minRentPeriod: { valueAsNumber: true },
};
