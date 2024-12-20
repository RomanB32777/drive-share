export const getPluralNoun = (word: string, num: number) => {
	const forms = word.split("_");

	return num % 10 === 1 && num % 100 !== 11
		? forms[0]
		: num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
			? forms[1]
			: forms[2];
};
