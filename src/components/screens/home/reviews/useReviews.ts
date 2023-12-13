import { useQuery } from 'react-query'

import { getProductUrl } from '@/config/url.config'

import { ReviewService } from '@/services/review.service'
import { IReviewsItem } from '@/shared/types/review.types'

// import { IMenuItem } from './../menu.interface'

// export const useReviewsHome = () => {
// 	const queryData = useQuery(['review home'], () => ReviewService.getAll(), {
// 		select: ({ data }) =>
// 			data
// 				.filter(product => product.image)
// 				.map(
// 					review =>
// 						({
// 							name: review.name,
// 							description: review.description,
// 							specialty: review.specialty,
// 							image: review.image,
// 						} as IReviewsItem)
// 				)
// 				.slice(0, 4),
// 	})

// 	return queryData
// }

export const useReviews = () => {
	const queryData = useQuery(
		['product container menu'],
		() => ReviewService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter(product => product.image)
					.map(
						review =>
							({
								name: review.name,
								description: review.description,
								specialty: review.specialty,
								image: review.image,
							} as IReviewsItem)
					),
		}
	)

	return queryData
}
