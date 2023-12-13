import SectionContainer from '@/components/ui/section/SectionContainer'
import { FC } from 'react'
import styles from './Reviews.module.scss'
import ReviewsItem from './ReviewsItem/ReviewsItem'
import { IReviewContainer } from './reviews.interface'
import { IReviews } from '@/shared/types/review.types'

import { Mousewheel, Scrollbar } from 'swiper'
import 'swiper/scss'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
const Reviews: FC<{ menu: IReviews }> = ({ menu: { reviews } }) => {
	const { t } = useTranslation('common')

	return (
		<section className={styles.reviews}>
			<div className={styles.containerReviews}>
				<h1>{t('block_reviews.title')}</h1>
				<p>{t('block_reviews.description')}</p>

				<Swiper
					slidesPerView={'auto'}
					// centeredSlides
					spaceBetween={30}
					speed={1000}
					modules={[Mousewheel]}
					mousewheel
					// scrollbar={{
					// 	draggable: true,
					// }}
					className={styles.swiperMain}
					// loop
				>
					{reviews.map((item, index) => (
						<SwiperSlide key={index} className={styles.swiperSlide}>
							<ReviewsItem item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
export default Reviews
