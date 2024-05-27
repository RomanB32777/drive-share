import { FC } from "react";

import { pathRoutes } from "shared/config/routing";
import { usePageTitle } from "shared/lib/hooks";
import { getValueMinDigits } from "shared/lib/number";
import { Carousel } from "shared/ui";

import { aboutCarouselItems, aboutDoingItems } from "../../config/constants";
import { AboutBanner } from "../about-banner";

import styles from "./AboutPage.module.scss";

export const AboutPage: FC = () => {
	usePageTitle(pathRoutes.about.title);

	return (
		<div className={styles.layout}>
			<div className={styles.wrapper}>
				<AboutBanner />

				<div>
					<span className={styles.pretitle}>наша миссия</span>
					<h4 className={styles.title}>
						Мы предоставляем возможность клиентам избавиться от необходимости владеть автомобилем,
						обеспечивая им мгновенный и удобный доступ к транспортным средствам по мере их
						потребности.
					</h4>

					<p className={styles.description}>
						Наша платформа помогает решить актуальные проблемы, с которыми сталкивается современный
						мир, включая проблемы экологической устойчивости и доступа к экономическим возможностям.
					</p>
				</div>

				<Carousel slidesPerRow={1} arrowStyle="transparent" arrowsPosition="outside" dots={false}>
					{aboutCarouselItems.map(({ image, pretitle, title, description }, index) => (
						<div key={index}>
							<div className={styles.slide}>
								<img src={image} alt={title} />

								<div>
									<span className={styles.pretitle}>{pretitle}</span>
									<h4 className={styles.title}>{title}</h4>

									<p className={styles.description}>{description}</p>
								</div>
							</div>
						</div>
					))}
				</Carousel>

				<div>
					<span className={styles.pretitle}>Что мы делаем</span>

					<div className={styles.doingItems}>
						{aboutDoingItems.map(({ title, description }, index) => (
							<div key={index}>
								<span className={styles.doingIndex}>{getValueMinDigits(index + 1)}.</span>

								<h4 className={styles.title}>{title}</h4>

								<p className={styles.description}>{description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
