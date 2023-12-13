import { Dispatch, SetStateAction } from 'react'

export interface IHeaderNavItem {
	link: string
	text: string
	text2: string
	text3: string
	variant?: string
	setIsVisible: Dispatch<SetStateAction<boolean>>
	data_id: string
}

export interface IHeaderNav {
	links: Omit<IHeaderNavItem, 'setIsVisible'>[]
	variant: 'inside' | 'outside'
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const headerLinks: Pick<IHeaderNav, 'links'> = {
	links: [
		{
			link: `/#home`,
			text: 'Главная',
			text2: 'Головна',
			text3: 'Home',
			data_id: 'home',
		},
		{
			link: '/#universities',
			text: 'Университеты',
			text2: 'Університети',
			text3: 'Universities',
			data_id: 'universities',
		},
		{
			link: '/#products',
			text: 'Услуги и цены',
			text2: 'Послуги та ціни',
			text3: 'Subscription and prices',
			data_id: 'products',
		},
		{
			link: '/#contacts',
			text: 'Контакты',
			text2: 'Контакти',
			text3: 'Contacts',
			data_id: 'contacts',
		},
	],
}
