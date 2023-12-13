import Ukf from '@/components/screens/ukf/Ukf'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
	// Add custom props here
}

export default function UkfPage(
	_props: InferGetStaticPropsType<typeof getStaticProps>
) {
	return <Ukf />
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'ru', [
			'common',
			'contactform',
			'footer',
			'subscriptions',
		])),
	},
})
