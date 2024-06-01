import { notification } from "antd";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
	IVewerDocuments,
	selectViewer,
	useFetchViewerDocumentsQuery,
	useUploadViewerDocumentsMutation,
} from "entities/viewer";
import { handleMutationResult } from "shared/api";
import { useAppSelector } from "shared/lib/hooks";
import { Button, Upload } from "shared/ui";

import styles from "./DocumentsForm.module.scss";

export const DocumentsForm: FC = () => {
	const viewer = useAppSelector(selectViewer);

	const { data: viewerDocuments } = useFetchViewerDocumentsQuery(viewer.id, { skip: !viewer.id });
	const [uploadDocuments, { isLoading }] = useUploadViewerDocumentsMutation();

	const {
		handleSubmit,
		control,
		formState: { isDirty },
	} = useForm<IVewerDocuments>({
		defaultValues: viewerDocuments,
		disabled: isLoading,
		mode: "onSubmit",
	});

	const handleSubmitForm: SubmitHandler<IVewerDocuments> = async (values) => {
		const res = await uploadDocuments(values);

		const data = handleMutationResult<IVewerDocuments>(res);

		if (data) {
			notification.success({ message: "Документы успешно загружены" });
		}
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
			<div className={styles.sections}>
				<div>
					<h3 className={styles.title}>Личные документы</h3>
					<h4 className={styles.fieldsTitle}>Паспорт</h4>

					<div className={styles.fields}>
						<Upload control={control} name="passport1" label="Первый разворот" blockSize="big">
							<p className={styles.uploadDescription}>Первый разворот ФИО и место выдачи</p>
						</Upload>

						<Upload control={control} name="passport2" label="Второй разворот" blockSize="big">
							<p className={styles.uploadDescription}>Второй разворот Прописка</p>
						</Upload>
					</div>
				</div>

				<div>
					<h4 className={styles.fieldsTitle}>Водительское удостоверение</h4>

					<div className={styles.fields}>
						<Upload control={control} name="driverLicense1" label="Первая сторона" blockSize="big">
							<p className={styles.uploadDescription}>Первая сторона Личные данные</p>
						</Upload>

						<Upload control={control} name="driverLicense2" label="Вторая сторона" blockSize="big">
							<p className={styles.uploadDescription}>Вторая сторона Категории ТС</p>
						</Upload>
					</div>
				</div>
			</div>

			<Button type="submit" modificator={styles.button} disabled={!isDirty || isLoading}>
				Сохранить
			</Button>
		</form>
	);
};
