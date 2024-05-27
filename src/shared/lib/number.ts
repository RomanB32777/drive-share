export const getValueCurrency = (
	num: number,
	options: Intl.NumberFormatOptions = {
		style: "currency",
		currency: "RUB",
		minimumFractionDigits: 0,
	}
) => new Intl.NumberFormat("ru", options).format(num || 0);

export const getValueMinDigits = (num: number, minDigits = 2) =>
	num.toLocaleString("ru", { minimumIntegerDigits: minDigits });
