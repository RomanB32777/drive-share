import { FC } from "react";

import classNames from "classnames";
import { useFetchCarQuery } from "providers/store/models";
import { useParams } from "react-router-dom";
import { Carousel, ContentLayout } from "shared/components";
import { useAppSelector } from "shared/hooks";
import { IComponentWithModificator } from "shared/interfaces";

import { Owner, Rating, RentForm } from "./components";
import styles from "./Csar.module.scss";

export const CarPage: FC<IComponentWithModificator> = ({ modificator }) => {
	const { id = "" } = useParams();
	const {
		car: { model, photo },
	} = useAppSelector(({ cars }) => cars);

	const { isLoading } = useFetchCarQuery(id, { skip: !id });

	return (
		<ContentLayout isLoading={isLoading}>
			<Carousel autoplaySpeed={10000} autoplay>
				{[photo].map((slide, index) => (
					<div key={index} className={styles.slide}>
						<img src={slide} alt="img" className={styles.image} />
					</div>
				))}
			</Carousel>

			<div className={classNames(styles.wrapper, modificator)}>
				<div className={styles.content}>
					<div className={styles.topBlock}>
						<h1 className={styles.title}>{model}</h1>

						<Rating />
					</div>

					<div className={styles.info}>
						<Owner />

						<div>
							<h5 className={styles.descriptionTitle}>Описание от владельца</h5>
							<p className={styles.description}>
								Новый премиальный кроссовер CHERY OMODA C5 . Будем рады с вами
								сотрудничать.Автомобиль в отличном состоянии, надежный и ухоженный, вовремя получает
								техническое обслуживание. Салон чистый, не прокуренный. Усилитель руля, мягкая
								подвеска, маленький расход топлива, центральный передний подлокотник, электропривод
								зеркал, кондиционер, огромный багажник а также много других необходимых опций- все,
								что нужно для комфортных поездок и дальних путешествий. Детское автокресло. Выдача
								круглосуточно. Возможна доставка авто (цена договорная).
							</p>
						</div>
						<div>
							<h5 className={styles.blockTitle}>Правила аренды</h5>
							<ul>
								<li className={styles.record}>
									<span>Включенный пробег</span>
									<span className={styles.dotted}></span>
									<span>200 км / сутки</span>
								</li>
								<li className={styles.record}>
									<span>Депозит</span>
									<span className={styles.dotted}></span>
									<span>20 000 ₽</span>
								</li>
							</ul>
						</div>
						<div>
							<h5 className={styles.blockTitle}>Характеристики автомобиля</h5>
							<ul>
								<li className={styles.record}>
									<span>Включенный пробег</span>
									<span className={styles.dotted}></span>
									<span>200 км / сутки</span>
								</li>
								<li className={styles.record}>
									<span>Депозит</span>
									<span className={styles.dotted}></span>
									<span>20 000 ₽</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles.sidebar}>
					<RentForm />
				</div>
			</div>
		</ContentLayout>
	);
};
