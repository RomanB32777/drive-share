import { RegisterOptions } from "react-hook-form";

import { TAuthByEmail, TSignUpViewer } from "entities/viewer";
import { emailRule, maxLengthRule, stringRule } from "shared/const";

const MIN_PASSWORD_LENGTH = 5;

export const authValidation: Record<keyof TAuthByEmail, RegisterOptions> = {
	email: {
		required: true,
		maxLength: maxLengthRule,
		pattern: emailRule,
	},
	password: {
		required: true,
		minLength: {
			value: MIN_PASSWORD_LENGTH,
			message: `Минимум ${MIN_PASSWORD_LENGTH} символов`,
		},
		maxLength: maxLengthRule,
		pattern: stringRule,
	},
};

export const registrationValidation: Record<keyof TSignUpViewer, RegisterOptions> = {
	...authValidation,
	name: {
		required: true,
		maxLength: maxLengthRule,
		pattern: stringRule,
	},
	surname: {
		required: true,
		maxLength: maxLengthRule,
		pattern: stringRule,
	},
};
