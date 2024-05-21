import { RegisterOptions } from "react-hook-form";

import { TViewerProfile } from "entities/viewer";
import { emailRule, maxLengthRule, stringRule } from "shared/const";

const defaultRule: RegisterOptions = {
	maxLength: maxLengthRule,
	pattern: stringRule,
};

export const accountValidation: Partial<Record<keyof TViewerProfile, RegisterOptions>> = {
	name: defaultRule,
	surname: defaultRule,
	email: {
		maxLength: maxLengthRule,
		pattern: emailRule,
	},
	birthday_date: {},
	phone: {},
	nationality: defaultRule,
	driving_experience: { valueAsNumber: true },
	identification_number: { valueAsNumber: true },
};
