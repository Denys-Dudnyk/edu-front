import Footer from '@/components/layout/footer/Footer'
// import Meta from '@/shared/meta/Meta'
import { FC } from 'react'
import HomeBanner from './homebanner/HomeBanner'
import Studium from './studium/Studium'
import { useUkf } from './studium/useUkf'
import Form from '@/components/ui/form/Form'
import Contacts from '../home/contacts/Contacts'
import dynamic from 'next/dynamic'

const Meta = dynamic(() => import('@/shared/meta/Meta'), {
	ssr: false,
})

const Umb: FC = () => {
	// const { data } = useUkf()

	return (
		<Meta title='UMB' description='Univerzita Mateja Bela v Banskej Bystrici'>
			<HomeBanner />
			{/* <Studium menu={{ ukfFF: data || [] }} /> */}
			<Contacts />
			<Footer />
		</Meta>
	)
}
export default Umb
