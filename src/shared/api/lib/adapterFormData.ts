export const adapterFormData = <T extends object>(data: T) => {
	const formData = new FormData();

	for (const key in data) {
		const fieldValue = data[key];

		if (fieldValue) {
			formData.append(String(key), fieldValue instanceof File ? fieldValue : String(fieldValue));
		}
	}

	return formData;
};
