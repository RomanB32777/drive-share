import dayjs from "dayjs";
import { useLazyFetchCarsQuery } from "providers/store/models";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchIcon } from "shared/assets/icons";
import { Button, PeriodFilter } from "shared/components";
import { cityOptions } from "shared/constants";
import { IPeriodFilterValues } from "shared/interfaces";

import styles from "./CatalogFilter.module.scss";

const defaultValues: IPeriodFilterValues = {
	city: cityOptions[0].value,
	from: { date: dayjs(), time: dayjs() },
	to: { date: dayjs().add(1, "day"), time: dayjs() },
};

export const CatalogFilter = () => {
	const [fetchCars, { isLoading }] = useLazyFetchCarsQuery();

	const { setValue, handleSubmit, watch } = useForm<IPeriodFilterValues>({
		defaultValues,
	});

	const filterParams = watch();

	const onSubmit: SubmitHandler<IPeriodFilterValues> = ({ city, from, to }) => {
		const dateBegin = from.date
			.set("hour", from.time.hour())
			.set("minute", from.time.minute())
			.toISOString();

		const dateEnd = to.date
			.set("hour", to.time.hour())
			.set("minute", to.time.minute())
			.toISOString();

		fetchCars({
			city,
			from: dateBegin,
			to: dateEnd,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.filter}>
			<div className={styles.items}>
				<PeriodFilter
					data={filterParams}
					defaultValues={defaultValues}
					setValue={setValue}
					classes={{
						items: styles.item,
						select: styles.select,
					}}
					disabled={isLoading}
				/>
			</div>

			<div>
				<Button type="submit" disabled={isLoading} className={styles.button}>
					<SearchIcon />
				</Button>
			</div>
		</form>
	);
};
