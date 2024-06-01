import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { FC } from "react";
import { Link, Outlet, generatePath, useNavigate } from "react-router-dom";

import { CarsGrid } from "features/cars-grid";
import {
	ICar,
	ICarFormPathParams,
	selectCars,
	useDeleteCarMutation,
	useFetchCarsQuery,
} from "entities/car";
import { selectViewer } from "entities/viewer";
import { PlusIcon, SettingsIcon, TrashIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector } from "shared/lib/hooks";
import { Button } from "shared/ui";

import styles from "./Cars.module.scss";

const { confirm } = Modal;

export const Cars: FC = () => {
	const { childRoutes } = pathRoutes.profile;

	const navigate = useNavigate();

	const viewer = useAppSelector(selectViewer);

	const items = useAppSelector(selectCars);

	const { isLoading } = useFetchCarsQuery({ userId: viewer.id });
	const [deleteCar] = useDeleteCarMutation();

	// TODO не работает типизация
	const addFormPath = generatePath(childRoutes?.cars?.childRoutes?.carForm?.path || "", {
		type: "add",
	} as ICarFormPathParams);

	const handleDeleteCar =
		({ id }: ICar) =>
		() => {
			confirm({
				title: "Вы уверены, что хотите удалить автомобиль?",
				icon: <ExclamationCircleFilled />,
				okText: "Да",
				okType: "danger",
				centered: true,
				cancelText: "Отмена",
				cancelButtonProps: { type: "text" },
				onOk: async () => {
					await deleteCar(id);
				},
			});
		};

	const handleEditCar =
		({ id }: ICar) =>
		() => {
			const pathParams: ICarFormPathParams = { type: "edit", id: `${id}` };

			// TODO не работает типизация
			const editFormPath = generatePath(
				childRoutes?.cars?.childRoutes?.carForm?.path || "",
				pathParams
			);

			navigate(editFormPath);
		};

	const renderCardButtons = (car: ICar) => (
		<div className={styles.actions}>
			<Button style="whiteDark" size="base" onClick={handleEditCar(car)}>
				<div>
					<SettingsIcon />
					<p>Настройки автомобиля</p>
				</div>
			</Button>

			<Button style="whiteDark" size="base" onClick={handleDeleteCar(car)}>
				<div>
					<TrashIcon />
					<p>Удалить автомобиль</p>
				</div>
			</Button>
		</div>
	);

	return (
		<>
			<div className={styles.head}>
				<Link to={addFormPath}>
					<Button style="outlinePrimary" modificator={styles.button}>
						<>
							<PlusIcon />
							Добавить автомобиль
						</>
					</Button>
				</Link>
			</div>

			<Outlet />

			<CarsGrid
				isLoading={isLoading}
				items={items}
				cardProps={{ modificator: styles.card }}
				renderCardContent={renderCardButtons}
			/>
		</>
	);
};
