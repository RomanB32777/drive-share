/* eslint-disable @typescript-eslint/no-unused-vars */
import { message, Upload as AntdUpload, type UploadProps } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

import { UploadIcon } from "../../assets/icons";
import { TFormElement } from "../../interfaces";
import { Button } from "../button";

import styles from "./Upload.module.scss";

interface IUpload<TFieldValues extends FieldValues>
	extends Omit<UploadProps, "name" | "accept" | "fileList">,
		TFormElement<TFieldValues> {
	accept?: string[];
	maxSize?: number; // MB
}

export const Upload = <TFieldValues extends FieldValues>({
	control,
	name,
	rules,
	accept,
	maxSize = 3,
	children,
	multiple,
	...props
}: IUpload<TFieldValues>) => {
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
				const handleChange: UploadProps["onChange"] = async ({ file, fileList }) => {
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
						<AntdUpload
							name="avatar"
							listType="picture-card"
							beforeUpload={() => false}
							onChange={handleChange}
							showUploadList={false}
							accept={accept?.join(",")}
							className={styles.upload}
							disabled={disabled}
							fileList={uploadedFileList}
							{...props}
						>
							{imageUrl ? (
								<img src={imageUrl} alt="avatar" className={styles.image} />
							) : (
								<Button style="transparent" type="button" modificator={styles.button}>
									{uploadedFile?.name || <UploadIcon />}
								</Button>
							)}

							{children}
						</AntdUpload>

						{error?.message && <p className={styles.error}>{error.message}</p>}
					</div>
				);
			}}
		/>
	);
};
