import { FC } from 'react'

import Footer from '@/components/layout/footer/Footer'
// import Meta from '@/shared/meta/Meta'

import ProductContainer from './products/ProductContainer'

import Contacts from './contacts/Contacts'
import HomeSection from './home-section/HomeSection'
import AboutUni from './about-us/AboutUni'
import Problems from './problems/Problems'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import {
	IReviewContainer,
	IReviewContainerItem,
} from './reviews/reviews.interface'
import { useReviews } from './reviews/useReviews'
// import ReviewCont from './reviews/ReviewCont'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

export interface IHome {
	reviews: IReviewContainerItem[]
}

const Meta = dynamic(() => import('@/shared/meta/Meta'), {
	ssr: false,
})

const Home: FC = () => {
	const { data } = useReviews()
	const { t } = useTranslation('common')

	return (
		<Meta title={t('title_home')} description={t('description_home')}>
			<HomeSection />
			<AboutUni />
			<Problems />
			<Services />
			<ProductContainer />
			<Reviews menu={{ reviews: data || [] }} />
			<Contacts />
			<Footer />
		</Meta>
	)
	// menu={{ reviews: data || [] }}
}
export default Home
