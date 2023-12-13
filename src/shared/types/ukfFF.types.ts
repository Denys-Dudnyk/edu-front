// export interface IReview {
// 	_id: string
// 	name: string
// 	specialty: string
// 	description: string
// 	image: string
// }

export interface IUkfItem {
	_id: string
	name: string

	length: string

	language: string

	deadline: string

	description: string

	nameUA: string
	nameEN: string
	lengthUA: string
	lengthEN: string
	languageUA: string
	languageEN: string
	descriptionUA: string
	descriptionEN: string
}

export interface IUkf {
	ukfFF: IUkfItem[]
}
