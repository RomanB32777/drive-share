/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from "dayjs";
import { FC, useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
	TRentFilterValues,
	selectStatuses,
	useFetchRentStatusesQuery,
	useLazyFetchRentsQuery,
} from "entities/rent";
import { useAppSelector } from "shared/lib/hooks";
import { Button, FormRadio, Loader } from "shared/ui";
import { DatePeriod } from "shared/ui/date-period";

import { validation } from "../model/validation";

import styles from "./RentFilter.module.scss";

const defaultFormValues: Partial<TRentFilterValues> = {
	from: dayjs().toISOString(),
	to: dayjs().add(1, "day").toISOString(),
};

export const RentFilter: FC = () => {
	const { isLoading: isFetchStatusesLoading } = useFetchRentStatusesQuery();
	const [fetchRents, { isLoading }] = useLazyFetchRentsQuery();

	const statuses = useAppSelector(selectStatuses);

	const { control, watch, handleSubmit, reset } = useForm<TRentFilterValues>({
		mode: "onChange",
		defaultValues: defaultFormValues,
		disabled: isLoading,
	});

	const onSubmit: SubmitHandler<TRentFilterValues> = useCallback(
		(values) => {
			fetchRents(values);
		},
		[fetchRents]
	);

	const resetClickHandler = () => reset();

	useEffect(() => {
		const subscription = watch(() => handleSubmit(onSubmit)());

		return () => subscription.unsubscribe();
	}, [watch, handleSubmit, onSubmit]);

	return (
		<div className={styles.filter}>
			<form>
				<div>
					{isFetchStatusesLoading ? (
						<Loader />
					) : (
						<FormRadio label="Статус сделки" control={control} name="status" items={statuses} />
					)}
				</div>

				<div className={styles.periods}>
					<p>Период</p>

					<div>
						<DatePeriod control={control} name="from" label="От" rules={validation.from} />
					</div>
					<div>
						<DatePeriod control={control} name="to" label="До" rules={validation.to} />
					</div>
				</div>

				<div>
					<Button style="whiteDark" modificator={styles.resetButton} onClick={resetClickHandler}>
						Сбросить фильтры
					</Button>
				</div>
			</form>
		</div>
	);
};
