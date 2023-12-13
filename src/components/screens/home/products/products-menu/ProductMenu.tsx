import { FC } from 'react'

import Products from './Products'
import { useProductsHome } from '../useProducts'
import { useTranslation } from 'react-i18next'

const ProductMenu: FC = () => {
	const { data } = useProductsHome()
	const { t } = useTranslation('subscriptions')

	return <Products menu={{ title: t('section-title'), items: data || [] }} />
}
export default ProductMenu
