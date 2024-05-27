import classNames from "classnames";
import dayjs from "dayjs";
import { FC, ReactNode, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TCarCreateForm, TCarKeys, useCreateCarMutation } from "entities/car";
import { useDebounce } from "shared/lib/hooks";
import { Button } from "shared/ui";

import { CarParameters } from "../car-parameters";
import { CarPhotos } from "../car-photos";
import { RentTerms } from "../rent-terms";

import styles from "./CarForm.module.scss";

type TFormType = Extract<TCarKeys, "parameters" | "rentTerms"> | "photos";

const formTitles: Record<TFormType, { linkTitle: string; formTitle: string }> = {
	parameters: {
		linkTitle: "Данные автомобиля",
		formTitle: "Введите данные автомобиля",
	},
	rentTerms: {
		linkTitle: "Условия аренды",
		formTitle: "Условия аренды",
	},
	photos: {
		linkTitle: "Фотографии",
		formTitle: "Фотографии и описание автомобиля",
	},
};

const formSteps = Object.keys(formTitles);

export const CarForm: FC = () => {
	const [formType, setFormType] = useState<TFormType>("parameters");

	const [createCar, { isLoading }] = useCreateCarMutation();

	const {
		handleSubmit,
		reset,
		control,
		formState: { isValid, isDirty },
	} = useForm<TCarCreateForm>({
		defaultValues: {},
		disabled: isLoading,
		mode: "onSubmit",
	});

	const isLastStep = useDebounce(formType === "photos", 0);

	const handleSubmitForm: SubmitHandler<TCarCreateForm> = ({ parameters, ...values }) => {
		const { releaseYear, ...parameterFields } = parameters;

		const adaptedParameters = { ...parameterFields, releaseYear: dayjs(releaseYear).year() };

		createCar({ ...values, parameters: adaptedParameters });
		reset();
	};

	const handleChangeFormType = (type: TFormType) => () => {
		setFormType(type);
	};

	const handleClickButton = () => {
		const nextFormStep = !isLastStep
			? (formSteps[formSteps.indexOf(formType) + 1] as TFormType)
			: undefined;

		if (nextFormStep) {
			handleChangeFormType(nextFormStep)();
		}
	};

	const formTypes: Record<TFormType, ReactNode> = {
		parameters: <CarParameters control={control} />,
		rentTerms: <RentTerms control={control} />,
		photos: <CarPhotos control={control} />,
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<div className={styles.navigation}>
					<div>
						<h4>Автомобиль</h4>
						<ul>
							{Object.entries(formTitles).map(([key, { linkTitle }]) => (
								<li
									key={key}
									className={classNames({ [styles.active]: key === formType })}
									onClick={handleChangeFormType(key as TFormType)}
								>
									{linkTitle}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.content}>
				<h3 className={styles.title}>{formTitles[formType].formTitle}</h3>

				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<div className={styles.formContent}>{formTypes[formType]}</div>

					<Button
						type={isLastStep ? "submit" : "button"}
						modificator={styles.button}
						disabled={!isDirty || !isValid || isLoading}
						onClick={handleClickButton}
					>
						{isLastStep ? "Сохранить" : "Далее"}
					</Button>
				</form>
			</div>
		</div>
	);
};
