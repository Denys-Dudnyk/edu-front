import Footer from '@/components/layout/footer/Footer'
// import Meta from '@/shared/meta/Meta'
import { FC } from 'react'
import HomeBanner from './homebanner/HomeBanner'
import Studium from './studium/Studium'
import { useUkf } from './studium/useUkf'
import Contacts from '../home/contacts/Contacts'
import dynamic from 'next/dynamic'

const Meta = dynamic(() => import('@/shared/meta/Meta'), {
	ssr: false,
})

const Ukf: FC = () => {
	const { data } = useUkf()

	return (
		<Meta title='UKF' description='Univerzita Konštantína Filozofa v Nitre'>
			<HomeBanner />
			<Studium menu={{ ukfFF: data || [] }} />
			<Contacts />
			<Footer />
		</Meta>
	)
}
export default Ukf
