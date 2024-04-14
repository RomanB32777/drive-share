import { theme } from "antd";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TViewerProfile, useUpdateViewerMutation } from "entities/viewer";
import { IComponentWithModificator } from "shared/interfaces";
import { Button, FormDatePicker, FormInput, Upload } from "shared/ui";

import { accountValidation } from "../model/validation";

import styles from "./AccountForm.module.scss";

export const AccountForm: FC<IComponentWithModificator> = ({ modificator }) => {
	const { token } = theme.useToken();

	const [updateViewer, { isLoading }] = useUpdateViewerMutation();

	const {
		handleSubmit,
		control,
		formState: { isValid, isDirty },
	} = useForm<TViewerProfile>({
		defaultValues: {},
		disabled: isLoading,
		mode: "onChange",
		reValidateMode: "onChange",
	});

	const handleSubmitForm: SubmitHandler<TViewerProfile> = (values) => {
		updateViewer(values);
	};

	return (
		<div className={modificator}>
			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<div className={styles.sections}>
					<div>
						<h3 className={styles.title}>Ваше фото</h3>

						<Upload control={control} name="avatar" accept={["image/*"]} />
					</div>

					<div>
						<h3 className={styles.title}>Личная информация</h3>
						<div className={styles.fields}>
							<FormInput control={control} rules={accountValidation.name} name="name" label="Имя" />

							<FormInput
								control={control}
								rules={accountValidation.surname}
								name="surname"
								label="Фамилия"
							/>

							<FormDatePicker
								control={control}
								name="birthday_date"
								label="День рождения"
								style={{ borderColor: token.colorBorder }}
								rootClassName={styles.datePicker}
							/>
						</div>
					</div>

					<div>
						<h3 className={styles.title}>Персональная информация</h3>
						<div className={styles.fields}>
							<FormInput
								control={control}
								rules={accountValidation.phone}
								classNames={{ input: styles.spinHidden }}
								type="number"
								name="phone"
								label="Телефон"
							/>

							<FormInput
								control={control}
								rules={accountValidation.email}
								type="email"
								name="email"
								label="Email"
							/>

							<FormInput
								control={control}
								rules={accountValidation.driving_experience}
								type="number"
								name="driving_experience"
								label="Водительский стаж от"
							/>

							<FormInput
								control={control}
								rules={accountValidation.nationality}
								name="nationality"
								label="Гражданство"
							/>

							<FormInput
								control={control}
								rules={accountValidation.identification_number}
								classNames={{ input: styles.spinHidden }}
								type="number"
								name="identification_number"
								label="ИНН"
							/>
						</div>
					</div>
				</div>

				<Button
					type="submit"
					modificator={styles.button}
					disabled={!isValid || !isDirty || isLoading}
				>
					Сохранить
				</Button>
			</form>
		</div>
	);
};
