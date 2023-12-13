export interface IUniversity {
	item1: string
	item2: string
	item3: string
	item4: string
	item5: string
	item6: string
	item7: string
	item8: string
	item9: string
	item10: string
	item11: string
}

export interface IBNG {
	item1: string
	item2: string
	item3: string
	item4: string
	item5: string
	item6: string
	item7: string
	item8: string
	item9: string
	item10: string
	item11: string
	item12: string
	item13: string
	item14: string
	item15: string
	item16: string
	item17: string
	item18: string
}

export interface IDormitory {
	item1: string
	item2: string
	item3: string
	item4: string
	item5: string
	item6: string
}

export interface IInfoHelp {
	item1: string
	item2: string
	item3: string
	item4: string
	item5: string
	item6: string
	item7: string
}

export interface IResult {
	item1: string
	item2: string
}

export interface IProduct {
	_id: string
	title: string
	slug: string
	description: string
	descriptionItem: string
	image: string
	price: string
	oldPrice: string
	university?: IUniversity
	permit?: IBNG
	dormitory?: IDormitory
	infohelp?: IInfoHelp
	result?: IResult

	titleUA: string
	descriptionUA: string
	descriptionItemUA: string

	titleEN: string
	descriptionEN: string
	descriptionItemEN: string
}
