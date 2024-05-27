import { RegisterOptions, ValidationRule } from "react-hook-form";

const MAX_INPUT_LENGTH = 255;
const STRING_PATTERN = /^(?=.*[a-zA-Zа-яёА-ЯЁ0-9]).+$/;
const EMAIL_PATTERN = /^[a-zA-Z0-9]+[\w.-]+@([A-z0-9][-A-z0-9]+\.)[A-z]{2,}$/;

export const maxLengthRule: ValidationRule<number> = {
	value: MAX_INPUT_LENGTH,
	message: `Максимум ${MAX_INPUT_LENGTH} символов`,
};

export const stringRule: ValidationRule<RegExp> = {
	value: STRING_PATTERN,
	message: "Неверный формат строки",
};

export const emailRule: ValidationRule<RegExp> = {
	value: EMAIL_PATTERN,
	message: "Неверный формат почты",
};

export const defaultStringRule: RegisterOptions = {
	maxLength: maxLengthRule,
	pattern: stringRule,
};
