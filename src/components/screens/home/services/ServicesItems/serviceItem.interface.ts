export interface IServiceItem {
	number: string
	title: string
	subTitle: string
}

export interface IServiceItems {
	items: IServiceItem[]
}

export const serviceItem: IServiceItems = {
	items: [
		{
			number: 'block_services.services_items.item2.number',
			title: 'block_services.services_items.item2.title',
			subTitle: 'block_services.services_items.item2.subTitle',
		},
		{
			number: 'block_services.services_items.item3.number',
			title: 'block_services.services_items.item3.title',
			subTitle: 'block_services.services_items.item3.subTitle',
		},
		{
			number: 'block_services.services_items.item4.number',
			title: 'block_services.services_items.item4.title',
			subTitle: 'block_services.services_items.item4.subTitle',
		},

		{
			number: 'block_services.services_items.item5.number',
			title: 'block_services.services_items.item5.title',
			subTitle: 'block_services.services_items.item5.subTitle',
		},
	],
}
