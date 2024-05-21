import { FC } from "react";
import { Link } from "react-router-dom";

import { DirectionArrowIcon } from "shared/assets/icons";
import promoImage from "shared/assets/images/rent-promo.png";
import { pathRoutes } from "shared/config/routing";
import { Button } from "shared/ui";

import styles from "./RentPromo.module.scss";

export const RentPromo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<img src={promoImage} alt="rent-promo" />

			<div className={styles.content}>
				<h4 className={styles.title}>
					<span>Сейчас самое время.</span>
					<br />
					Станьте арендодателем и увеличьте свой доход.
				</h4>
				<p className={styles.description}>
					<span>
						Время, когда Вы не за рулем, никогда не было более ценным. Когда Вы присоединяетесь к
						крупнейшему рынку совместного использования автомобилей, Вы получаете шанс зарабатывать
						больше, даже если это всего лишь дополнительный доход.
					</span>

					<span>Станьте арендодателем DriveShare и откройте мир возможностей.</span>
				</p>

				<Link to={pathRoutes.main.path}>
					<Button style="primary" modificator={styles.button}>
						<>
							Сдать авто
							<span className={styles.arrow}>
								<DirectionArrowIcon />
							</span>
						</>
					</Button>
				</Link>
			</div>
		</div>
	);
};
