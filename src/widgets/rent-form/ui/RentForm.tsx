import { notification } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

import { PeriodForm } from "features/period-form";
import { TPeriodFilterValues, selectCar } from "entities/car";
import { TRentFormData, useCreateRentMutation } from "entities/rent";
import { isAuthorizedViewer, selectViewer, signInLink } from "entities/viewer";
import { handleMutationResult } from "shared/api";
import { DirectionArrowIcon } from "shared/assets/icons";
import { useAppSelector } from "shared/lib/hooks";
import { getValueCurrency } from "shared/lib/number";
import { Button } from "shared/ui";

import styles from "./RentForm.module.scss";

export const RentForm: FC = () => {
	const viewer = useAppSelector(selectViewer);
	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const {
		id,
		price: { basePerDay },
		owner,
	} = useAppSelector(selectCar);

	const [createRent, { isLoading }] = useCreateRentMutation();

	const handleSubmit = async ({ from, to }: TPeriodFilterValues) => {
		const res = await createRent({
			carId: id,
			rentBegin: from,
			rentEnd: to,
			renter: viewer.id,
			seller: owner,
		});

		const data = handleMutationResult<TRentFormData>(res);

		if (data) {
			notification.success({ message: "Success" });
		}
	};

	return (
		<div className={styles.rent}>
			{isAuthorized ? (
				<div className={styles.form}>
					<h5 className={styles.title}>Период аренды</h5>

					<PeriodForm
						classes={{
							itemsWrapper: styles.filters,
							item: styles.item,
							select: styles.select,
							button: styles.button,
						}}
						onSubmit={handleSubmit}
						disabled={isLoading}
						buttonContent={
							<>
								Забронировать
								<span className={styles.arrow}>
									<DirectionArrowIcon />
								</span>
							</>
						}
					/>
				</div>
			) : (
				<div className={styles.auth}>
					<p>Для бронирования необходимо авторизоваться</p>

					<Link to={signInLink}>
						<Button style="outline" modificator={styles.authButton}>
							Войти
						</Button>
					</Link>
				</div>
			)}
			<div className={styles.price}>
				от {getValueCurrency(basePerDay)} <span>/ сутки</span>
			</div>
		</div>
	);
};
