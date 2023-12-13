import Truni from '@/components/screens/truni/Truni'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
	// Add custom props here
}

export default function TruniPage(
	_props: InferGetStaticPropsType<typeof getStaticProps>
) {
	return <Truni />
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
