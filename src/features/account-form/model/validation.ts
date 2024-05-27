import { RegisterOptions } from "react-hook-form";

import { TViewerProfile } from "entities/viewer";
import { defaultStringRule, emailRule, maxLengthRule } from "shared/const";

export const accountValidation: Partial<Record<keyof TViewerProfile, RegisterOptions>> = {
	name: defaultStringRule,
	surname: defaultStringRule,
	email: {
		maxLength: maxLengthRule,
		pattern: emailRule,
	},
	nationality: defaultStringRule,
	driving_experience: { valueAsNumber: true },
	identification_number: { valueAsNumber: true },
};
