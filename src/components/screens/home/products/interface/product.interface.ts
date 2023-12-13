export interface IMenuItem {
	image: string
	title: string
	link: string
	description: string
	price: string
	oldPrice: string

	titleUA: string
	descriptionUA: string
	descriptionItemUA: string

	titleEN: string
	descriptionEN: string
	descriptionItemEN: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
