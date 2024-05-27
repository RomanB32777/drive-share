import { theme } from "antd";
import dayjs from "dayjs";
import { FC } from "react";

import { FormDatePicker, FormInput, FormRadio } from "shared/ui";

import {
	insuranceItems,
	mileageItems,
	transmissionItems,
	wheelPositionItems,
} from "../../config/constants";
import { ICarFormType } from "../../model/types";
import { carParametersValidation } from "../../model/validation";

import styles from "./CarParameters.module.scss";

export const CarParameters: FC<ICarFormType> = ({ control }) => {
	const { token } = theme.useToken();

	return (
		<>
			<div>
				<div className={styles.fields}>
					<FormInput
						control={control}
						rules={carParametersValidation.brand}
						required={!!carParametersValidation.brand?.required}
						name="parameters.brand"
						label="Марка"
					/>

					<FormInput
						control={control}
						rules={carParametersValidation.model}
						required={!!carParametersValidation.model?.required}
						name="parameters.model"
						label="Модель"
					/>

					<FormInput
						control={control}
						rules={carParametersValidation.bodyType}
						required={!!carParametersValidation.bodyType?.required}
						name="parameters.bodyType"
						label="Тип кузова"
					/>

					<FormInput
						control={control}
						rules={carParametersValidation.drive}
						required={!!carParametersValidation.drive?.required}
						name="parameters.drive"
						label="Привод"
					/>

					<FormInput
						control={control}
						rules={carParametersValidation.engineType}
						required={!!carParametersValidation.engineType?.required}
						name="parameters.engineType"
						label="Тип двигателя"
					/>

					<FormInput
						control={control}
						rules={carParametersValidation.engineCapacity}
						required={!!carParametersValidation.engineCapacity?.required}
						name="parameters.engineCapacity"
						label="Объем двигателя"
						type="number"
					/>

					<FormDatePicker
						control={control}
						picker="year"
						mode="year"
						format="YYYY"
						name="parameters.releaseYear"
						label="Год выпуска"
						maxDate={dayjs()}
						required={!!carParametersValidation.releaseYear?.required}
						style={{ borderColor: token.colorBorder }}
						rootClassName={styles.datePicker}
						variant="outlined"
					/>

					<FormInput
						control={control}
						rules={carParametersValidation.seats}
						required={!!carParametersValidation.seats?.required}
						name="parameters.seats"
						label="Количество мест"
						type="number"
					/>
				</div>
			</div>

			<div>
				<h3 className={styles.title}>Параметры</h3>
				<div className={styles.radioFields}>
					<FormRadio
						control={control}
						name="parameters.mileage"
						rules={carParametersValidation.mileage}
						items={mileageItems.map((item) => ({ value: item, title: item }))}
						required={!!carParametersValidation.mileage?.required}
						label="Пробег"
					/>

					<FormRadio
						control={control}
						name="parameters.transmission"
						rules={carParametersValidation.transmission}
						items={transmissionItems.map((item) => ({ value: item, title: item }))}
						required={!!carParametersValidation.transmission?.required}
						label="Коробка передач"
					/>

					<FormRadio
						control={control}
						name="parameters.wheelPosition"
						rules={carParametersValidation.wheelPosition}
						items={wheelPositionItems.map((item) => ({ value: item, title: item }))}
						required={!!carParametersValidation.wheelPosition?.required}
						label="Расположение руля"
					/>
				</div>
			</div>

			<div>
				<h3 className={styles.title}>Страховка</h3>
				<div className={styles.radioFields}>
					<FormRadio
						control={control}
						name="insurance.ОСАГО"
						items={insuranceItems.map((item) => ({ value: item, title: item }))}
						label="ОСАГО"
					/>

					<FormRadio
						control={control}
						name="insurance.КАСКО"
						items={insuranceItems.map((item) => ({ value: item, title: item }))}
						label="КАСКО"
					/>
				</div>
			</div>
		</>
	);
};
