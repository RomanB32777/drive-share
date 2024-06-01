import { notification } from "antd";
import classNames from "classnames";
import dayjs from "dayjs";
import { FC, ReactNode, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generatePath, useNavigate, useParams } from "react-router-dom";

import {
	ICar,
	ICarFormPathParams,
	TCarCreateForm,
	TCarKeys,
	selectCar,
	useCreateCarMutation,
	useEditCarMutation,
	useFetchCarQuery,
} from "entities/car";
import { handleMutationResult } from "shared/api";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector, useDebounce } from "shared/lib/hooks";
import { Button, ContentLayout } from "shared/ui";

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
	const { id = "", type = "add" } = useParams<ICarFormPathParams>();
	const navigate = useNavigate();

	const [formType, setFormType] = useState<TFormType>("parameters");

	const car = useAppSelector(selectCar);

	const [createCar, { isLoading: isCreatingLoading }] = useCreateCarMutation();
	const [editCar, { isLoading: isEditLoading }] = useEditCarMutation();
	const { isLoading: isFetchLoading } = useFetchCarQuery(id, { skip: !id });

	const isLoading = isCreatingLoading || isEditLoading;
	const isLastStep = useDebounce(formType === "photos", 0);
	const isEdit = type === "edit";

	const {
		handleSubmit,
		control,
		formState: { isValid, isDirty },
	} = useForm<TCarCreateForm>({
		defaultValues: isEdit ? car : {},
		disabled: isLoading,
		mode: "onSubmit",
	});

	const handleEditCar = async (values: TCarCreateForm) => {
		const res = await editCar(values);

		const data = handleMutationResult<ICar>(res);

		if (data) {
			notification.success({ message: "Автомобиль успешно изменен" });
		}
	};

	const handleCreateCar = async (values: TCarCreateForm) => {
		const res = await createCar(values);

		const data = handleMutationResult<ICar>(res);

		if (data) {
			const carPath = generatePath(pathRoutes.car.path, { id: data.id });

			notification.success({ message: "Success" });

			navigate(carPath);
		}
	};

	const handleSubmitForm: SubmitHandler<TCarCreateForm> = ({ parameters, ...values }) => {
		const { releaseYear, ...parameterFields } = parameters;

		const adaptedParameters = { ...parameterFields, releaseYear: dayjs(releaseYear).year() };

		const carData = { ...values, parameters: adaptedParameters };

		isEdit ? handleEditCar(carData) : handleCreateCar(carData);
	};

	const handleChangeFormType = (typeKey: TFormType) => () => {
		setFormType(typeKey);
	};

	const handleClickButton = () => {
		const nextFormStep = !isLastStep
			? (formSteps[formSteps.indexOf(formType) + 1] as TFormType)
			: undefined;

		if (nextFormStep) {
			setFormType(nextFormStep);
		}
	};

	const formTypes: Record<TFormType, ReactNode> = {
		parameters: <CarParameters control={control} />,
		rentTerms: <RentTerms control={control} />,
		photos: <CarPhotos control={control} />,
	};

	return (
		<ContentLayout isLoading={isFetchLoading} isPageContent>
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
		</ContentLayout>
	);
};
