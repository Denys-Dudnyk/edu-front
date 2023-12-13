import { axiosClassic, instance } from '@/api/interceptors'
import { getReviewsUrl } from '@/config/api.config'
import { IReviews, IReviewsItem } from '../shared/types/review.types'

export interface IReviewEditInput extends Omit<IReviews, '_id'> {}

export const ReviewService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IReviewsItem[]>(getReviewsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return instance.get<IReviewEditInput>(getReviewsUrl(`/${_id}`))
	},
}
