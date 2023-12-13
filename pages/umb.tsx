import Umb from '@/components/screens/umb/Umb'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
	// Add custom props here
}

export default function UmbPage(
	_props: InferGetStaticPropsType<typeof getStaticProps>
) {
	return <Umb />
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
