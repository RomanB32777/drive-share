import { FC } from "react";

import { FormTextarea, Upload } from "shared/ui";

import { carExampleImages } from "../../config/constants";
import { ICarFormType } from "../../model/types";

import styles from "./CarPhotos.module.scss";

export const CarPhotos: FC<ICarFormType> = ({ control }) => {
	return (
		<>
			<div>
				<p className={styles.description}>
					Мы настоятельно советуем загружать фотографии высокого качества, так как именно по ним
					арендаторы принимают решение. Вот наиболее удачные ракурсы:
				</p>
				<div className={styles.exampleImages}>
					{carExampleImages.map(({ src, name }, index) => (
						<div key={index}>
							<div className={styles.exampleImage}>
								<img src={src} alt={name} />
							</div>
							<p>{name}</p>
						</div>
					))}
				</div>
			</div>

			<div>
				<h3 className={styles.title}>Загрузите фотографии</h3>
				<p className={styles.description}>
					Основное фото будет использоваться в общем каталоге и стоять первым.
				</p>

				<Upload
					control={control}
					name="mainPhono"
					accept={["image/*"]}
					className={styles.mainUpload}
				>
					<div className={styles.tip}>Основное фото</div>
				</Upload>

				<Upload control={control} name="photo" multiple accept={["image/*"]} />
			</div>

			<div className={styles.descriptionSection}>
				<h3 className={styles.title}>Добавьте описание автомобиля</h3>
				<p>Подробное описание увеличивает количество заявок и повышает доверие клиентов.</p>
				<p>Укажите:</p>

				<ul>
					<li>Особенности комплектации</li>
					<li>Техническое состояние вашего автомобиля</li>
					<li>Тип резины</li>
					<li>Дополнительная информация о вас и вашем автомобиле</li>
				</ul>

				<FormTextarea control={control} name="description" placeholder="Описание" />
			</div>
		</>
	);
};
