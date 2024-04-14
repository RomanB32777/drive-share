import { notification } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { PeriodForm } from "features/period-form";
import { IRentData, selectCar, useCreateRentMutation } from "entities/car";
import { isAuthorizedViewer, selectViewer } from "entities/viewer";
import { handleMutationResult } from "shared/api";
import { DirectionArrowIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/config/routing";
import { IPeriodFilterValues } from "shared/interfaces";
import { useAppSelector } from "shared/lib/hooks";
import { Button } from "shared/ui";

import styles from "./RentForm.module.scss";

export const RentForm: FC = () => {
	const navigate = useNavigate();

	const viewer = useAppSelector(selectViewer);
	const isAuthorized = useAppSelector(isAuthorizedViewer);

	const { price, owner } = useAppSelector(selectCar);

	const [createRent, { isLoading }] = useCreateRentMutation();

	const handleSubmit = async ({ from, to }: IPeriodFilterValues) => {
		const res = await createRent({
			rentBegin: from,
			rentEnd: to,
			renter: viewer.id,
			seller: owner,
		});

		const data = handleMutationResult<IRentData>(res);

		if (data) {
			notification.success({ message: "Success" });
		}
	};

	const handleAuthButtonClick = () => navigate(pathRoutes.auth.path);

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
								<span>Забронировать</span>
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

					<Button style="outline" onClick={handleAuthButtonClick} modificator={styles.authButton}>
						Войти
					</Button>
				</div>
			)}
			<div className={styles.price}>
				от {price} ₽ <span>/ сутки</span>
			</div>
		</div>
	);
};
