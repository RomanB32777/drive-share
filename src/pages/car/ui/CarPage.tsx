import { FC, Fragment, ReactNode } from "react";
import { useParams } from "react-router-dom";

import { RecommendedCarousel } from "widgets/recommended-carousel";
import { RentForm } from "widgets/rent-form";
import { CarRating, selectCar, useAddToFavoritesMutation, useFetchCarQuery } from "entities/car";
import { Review, useFetchReviewsQuery } from "entities/review";
import { CarOwner, useFetchUserQuery } from "entities/user";
import { selectViewer } from "entities/viewer";
import { HeartIcon } from "shared/assets/icons";
import { pathRoutes } from "shared/config/routing";
import { useAppSelector, usePageTitle } from "shared/lib/hooks";
import { getValueCurrency } from "shared/lib/number";
import { Button, Carousel, ContentLayout } from "shared/ui";

import styles from "./CarPage.module.scss";

export const CarPage: FC = () => {
	const { id = "" } = useParams();

	const car = useAppSelector(selectCar);
	const viewer = useAppSelector(selectViewer);

	const { isLoading } = useFetchCarQuery(id, { skip: !id });
	const { data: owner, isLoading: isOwnerLoading } = useFetchUserQuery(car.owner || 0, {
		skip: !car.owner,
	});
	const { data: reviews = [], isLoading: isReviewsLoading } = useFetchReviewsQuery(car.id || 0, {
		skip: !car.id,
	});

	const [addToFavorites] = useAddToFavoritesMutation();

	usePageTitle(car.parameters.model ?? pathRoutes.catalog.title);

	const handleClickLikeButton = () => addToFavorites({ userId: viewer.id, id: car.id });

	const renderRecord = (title: ReactNode, value: ReactNode) => (
		<li className={styles.record}>
			<span>{title}</span>
			<span className={styles.dotted}></span>
			<span>{value}</span>
		</li>
	);

	return (
		<ContentLayout isLoading={isLoading} isPageContent>
			<div className={styles.sliderWrapper}>
				<Carousel autoplaySpeed={10000} autoplay>
					{car.photo.map((slide, index) => (
						<div key={index} className={styles.slide}>
							<img src={slide} alt="img" className={styles.image} />
						</div>
					))}
				</Carousel>

				<div className={styles.sliderContent}>
					<Button style="white" modificator={styles.likeButton} onClick={handleClickLikeButton}>
						<HeartIcon />
					</Button>
				</div>
			</div>

			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.topBlock}>
						<h1 className={styles.title}>{car.parameters.model}</h1>

						<CarRating rating={car.rating} reviewsCount={reviews.length} />
					</div>

					<div className={styles.info}>
						<ContentLayout isLoading={isOwnerLoading}>
							{owner && <CarOwner {...owner} />}
						</ContentLayout>

						<div>
							<h5 className={styles.descriptionTitle}>Описание от владельца</h5>
							<p className={styles.description}>{car.description}</p>
						</div>
						<div>
							<h5 className={styles.blockTitle}>Правила аренды</h5>
							<ul>
								{renderRecord("Включенный пробег", 0)}
								{renderRecord("Депозит", getValueCurrency(car.rentTerms.deposit || 0))}
								{renderRecord("Минимальный стаж", car.rentTerms.minDriverExperience)}
								{renderRecord("Минимальный возраст", car.rentTerms.minAge)}
								{Object.entries(car.insurance).map(([insuranceType, item]) => (
									<Fragment key={insuranceType}>{renderRecord(insuranceType, item)}</Fragment>
								))}
							</ul>
						</div>
						<div>
							<h5 className={styles.blockTitle}>Характеристики автомобиля</h5>
							<ul>
								{renderRecord("Двигатель", car.parameters.engineType)}
								{renderRecord("Привод", car.parameters.drive)}
								{renderRecord("Год", car.parameters.releaseYear)}
								{renderRecord("Мест", car.parameters.seats)}
								{renderRecord("Коробка", car.parameters.transmission)}
								{renderRecord("Пробег", car.parameters.mileage)}
								{renderRecord("Кузов", car.parameters.bodyType)}
								{renderRecord("Руль", car.parameters.wheelPosition)}
							</ul>
						</div>

						<div>
							<div className={styles.reviewsHead}>
								<h5 className={styles.descriptionTitle}>Отзывы и оценки</h5>

								<CarRating rating={car.rating} reviewsCount={reviews.length} />
							</div>

							<ContentLayout modificator={styles.reviews} isLoading={isReviewsLoading}>
								{reviews.map((review) => (
									<Review key={review.id} {...review} />
								))}
							</ContentLayout>
						</div>
					</div>
				</div>

				<div className={styles.sidebar}>
					<RentForm />

					<RecommendedCarousel slidesPerRow={1} title="Рекомендуем" />
				</div>
			</div>
		</ContentLayout>
	);
};
