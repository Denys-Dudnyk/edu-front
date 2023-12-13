// export interface IReview {
// 	_id: string
// 	name: string
// 	specialty: string
// 	description: string
// 	image: string
// }

export interface IReviewsItem {
	_id: string
	name: string
	specialty: string
	description: string
	image: string
}

export interface IReviews {
	reviews: IReviewsItem[]
}
