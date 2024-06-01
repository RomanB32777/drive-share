import { message, Upload as AntdUpload, type UploadProps } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import classNames from "classnames";
import { useId, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { UploadIcon } from "../../assets/icons";
import { TFormElement } from "../../interfaces";
import { Button } from "../button";

import styles from "./Upload.module.scss";

type TUploadSize = "small" | "big";

interface IUpload<TFieldValues extends FieldValues>
	extends Omit<UploadProps, "name" | "accept" | "fileList">,
		TFormElement<TFieldValues> {
	accept?: string[];
	maxSize?: number; // MB
	blockSize?: TUploadSize;
}

const sizeStyles: Record<TUploadSize, string> = {
	small: styles.small,
	big: styles.big,
};

export const Upload = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	accept,
	maxSize = 3,
	children,
	// multiple,
	label,
	blockSize = "small",
	className,
	...props
}: IUpload<TFieldValues>) => {
	const id = useId();
	const [preview, setPreview] = useState<string>();
	const [uploadedFileList] = useState<UploadFile[]>([]); // setFileList

	const handleChangePreview = (file: RcFile, onChange: (value: RcFile) => void) => {
		const reader = new FileReader();

		reader.addEventListener("load", () => {
			setPreview(reader.result as string);
			onChange(file);
		});

		reader.readAsDataURL(file);
	};

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { value, disabled, onChange }, fieldState: { error } }) => {
				const handleChange: UploadProps["onChange"] = async ({ file }) => {
					// fileList
					const fileObj = file as RcFile;

					const { type, size } = fileObj;

					const isValidSize = size / 1024 / 1024 <= maxSize;

					if (!isValidSize) {
						message.error(`Объем файла не должен превышать ${maxSize}MB!`);
						return;
					}

					if (type.includes("image")) {
						handleChangePreview(fileObj, onChange);
					} else {
						setPreview(undefined);
						onChange(fileObj);
					}
				};

				const imageUrl = typeof value === "string" ? value : preview;
				const uploadedFile = typeof value === "object" ? (value as RcFile) : undefined;

				return (
					<div>
						{label && (
							<label htmlFor={id} className={styles.label}>
								{label}
							</label>
						)}

						<AntdUpload
							id={id}
							listType="picture-card"
							beforeUpload={() => false}
							onChange={handleChange}
							showUploadList={false}
							accept={accept?.join(",")}
							className={classNames(styles.upload, className, sizeStyles[blockSize])}
							disabled={disabled}
							fileList={uploadedFileList}
							{...props}
						>
							<div className={styles.uploadContent}>
								{imageUrl ? (
									<img src={imageUrl} alt="avatar" className={styles.image} />
								) : (
									<div>
										<Button style="transparent" type="button" modificator={styles.button}>
											{uploadedFile?.name || <UploadIcon />}
										</Button>
									</div>
								)}

								{children}
							</div>
						</AntdUpload>

						{error?.message && <p className={styles.error}>{error.message}</p>}
					</div>
				);
			}}
		/>
	);
};
