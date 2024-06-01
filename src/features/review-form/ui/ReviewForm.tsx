import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ICar } from "entities/car";
import { IReview, IReviewFormData, useCreateReviewMutation } from "entities/review";
import { selectViewer } from "entities/viewer";
import { handleMutationResult } from "shared/api";
import { useAppSelector } from "shared/lib/hooks";
import { Button, FormRating, FormTextarea } from "shared/ui";

import styles from "./ReviewForm.module.scss";

interface IReviewForm {
	carId: ICar["id"];
	onSuccess?: (data: IReview) => void;
}

export const ReviewForm: FC<IReviewForm> = ({ carId, onSuccess }) => {
	const viewer = useAppSelector(selectViewer);

	const [createReview, { isLoading }] = useCreateReviewMutation();

	const {
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm<IReviewFormData>({
		disabled: isLoading,
		mode: "onSubmit",
	});

	const onSubmit: SubmitHandler<IReviewFormData> = async (values) => {
		const res = await createReview({ ...values, carId, userId: viewer.id });

		const data = handleMutationResult<IReview>(res);

		if (data) {
			onSuccess?.(data);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<FormRating label="Ваша оценка" control={control} name="rating" size="big" />

			<FormTextarea
				label="Отзыв"
				name="comment"
				control={control}
				placeholder="Напишите отзыв об автомобиле и владельце"
			/>

			<div>
				<Button type="submit" disabled={!isValid || isLoading} modificator={styles.button}>
					Отправить
				</Button>
			</div>
		</form>
	);
};
