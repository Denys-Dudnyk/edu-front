import { IReviewsItem } from '@/shared/types/review.types'

export interface IReviewContainerItem extends Omit<IReviewsItem, 'image'> {
	imagePath: string
}

export interface IReviewContainer {
	reviewContainer: IReviewContainerItem[]
}
