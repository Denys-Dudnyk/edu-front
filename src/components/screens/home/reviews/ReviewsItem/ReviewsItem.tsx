import { FC } from 'react'
import styles from '../Reviews.module.scss'
import Image from 'next/image'

import reviewer from '/public/reviews/Denys_Dudnyk.jpg'
import { IReviewContainerItem } from '../reviews.interface'
import { IReviewsItem } from '@/shared/types/review.types'

const ReviewsItem: FC<{ item: IReviewsItem }> = ({
	item: { description, image, name, specialty },
}) => {
	return (
		<div className={styles.review_item}>
			<div className={styles.upper_section}>
				{/* <Image
					src={image}
					width={62}
					height={62}
					alt='Reviewer1'
					draggable={false}
					priority
				/> */}
				<div
					className={styles.reviewImg}
					style={{
						backgroundImage: `url(${image})`,
					}}
				></div>
				<div className={styles.name_reviewer}>
					<h1>{name}</h1>
					<h2>{specialty}</h2>
				</div>
			</div>

			<div className={styles.specialty}>
				<h2>{specialty}</h2>
				<div className={styles.line}></div>
			</div>

			<p>{description}</p>
		</div>
	)
}
export default ReviewsItem
