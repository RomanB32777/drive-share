import classNames from "classnames";
import dayjs from "dayjs";
import { FC, ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useFetchAreasQuery } from "entities/car";
import { IPeriodFilterValues } from "shared/interfaces";
import { Button, SearchSelect } from "shared/ui";
import { DatePeriod } from "shared/ui/date-period";

import { validation } from "../model/validation";

import styles from "./PeriodForm.module.scss";

interface IPeriodForm {
	defaultValues?: IPeriodFilterValues;
	disabled?: boolean;
	classes?: {
		form?: string;
		itemsWrapper?: string;
		item?: string;
		select?: string;
		button?: string;
	};
	buttonContent?: ReactNode;
	onSubmit: (values: IPeriodFilterValues) => Promise<unknown> | void;
}

const defaultFormValues: Partial<IPeriodFilterValues> = {
	from: dayjs().toISOString(),
	to: dayjs().add(1, "day").toISOString(),
};

const RU_ID = "113";

export const PeriodForm: FC<IPeriodForm> = ({
	disabled,
	classes,
	buttonContent,
	defaultValues = defaultFormValues,
	onSubmit,
}) => {
	const { areas } = useFetchAreasQuery(RU_ID, {
		selectFromResult: ({ data }) => ({
			areas: data?.areas.map(({ name }) => ({ value: name, label: name })),
		}),
	});

	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm<IPeriodFilterValues>({
		defaultValues,
		disabled,
		mode: "onChange",
		reValidateMode: "onChange",
	});

	const handleSubmitForm: SubmitHandler<IPeriodFilterValues> = (values) => {
		onSubmit(values);
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className={classes?.form}>
			<div className={classNames(styles.itemsWrapper, classes?.itemsWrapper)}>
				<div className={classNames(classes?.item, classes?.select)}>
					<SearchSelect
						control={control}
						name="city"
						label="Город"
						placeholder="Выберите город"
						options={areas}
					/>
				</div>

				<div className={classes?.item}>
					<DatePeriod control={control} name="from" label="Начало" rules={validation.from} />
				</div>

				<div className={classes?.item}>
					<DatePeriod control={control} name="to" label="Завершение" rules={validation.to} />
				</div>
			</div>

			<Button type="submit" disabled={disabled || !isValid} modificator={classes?.button}>
				{buttonContent || "Отправить"}
			</Button>
		</form>
	);
};
