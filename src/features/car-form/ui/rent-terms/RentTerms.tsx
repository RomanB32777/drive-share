import { FC } from "react";

import { FormInput } from "shared/ui";

import { ICarFormType } from "../../model/types";
import {
	carAddressValidation,
	carPriceValidation,
	carRentTermsValidation,
} from "../../model/validation";

import styles from "./RentTerms.module.scss";

export const RentTerms: FC<ICarFormType> = ({ control }) => {
	return (
		<>
			<div>
				<div className={styles.fields}>
					<FormInput
						control={control}
						rules={carRentTermsValidation.deposit}
						name="rentTerms.deposit"
						label="Депозит, ₽"
						type="number"
					/>

					<FormInput
						control={control}
						rules={carRentTermsValidation.kilPerDay}
						name="rentTerms.kilPerDay"
						label="Включенные километры пробега за сутки, км"
						type="number"
					/>

					<FormInput
						control={control}
						rules={carRentTermsValidation.additionalPayment}
						name="rentTerms.additionalPayment"
						label="Доплата за 1 км перепробега, ₽"
						type="number"
					/>

					<FormInput
						control={control}
						rules={carRentTermsValidation.minDriverExperience}
						name="rentTerms.minDriverExperience"
						label="Минимальный стаж водителя"
						type="number"
					/>

					<FormInput
						control={control}
						rules={carRentTermsValidation.minAge}
						name="rentTerms.minAge"
						label="Минимальный возраст водителя"
						type="number"
					/>
				</div>
			</div>

			<div>
				<h3 className={styles.title}>Адрес</h3>
				<div className={styles.fields}>
					<FormInput
						control={control}
						rules={carAddressValidation.city}
						name="address.city"
						label="Город"
					/>

					<FormInput
						control={control}
						rules={carAddressValidation.street}
						name="address.street"
						label="Улица и номер дома"
					/>
				</div>
			</div>

			<div>
				<h3 className={styles.title}>Стоимость автомобиля</h3>
				<div className={styles.fields}>
					<FormInput
						control={control}
						rules={carPriceValidation.basePerDay}
						name="price.basePerDay"
						label="Базовая стоимость за сутки, ₽"
						type="number"
					/>

					<FormInput
						control={control}
						rules={carPriceValidation.minRentPeriod}
						name="price.minRentPeriod"
						label="Минимальный срок аренды, сутки"
						type="number"
					/>
				</div>
			</div>
		</>
	);
};
