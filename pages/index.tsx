import Home, { IHome } from '@/components/screens/home/Home'
import { IReviewContainerItem } from '@/components/screens/home/reviews/reviews.interface'
import { fetchHelper } from '@/helpers/fetch.helper'
import { IReviews } from '@/shared/types/review.types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

type Props = {
	// Add custom props here
}

export default function HomePage(
	_props: InferGetStaticPropsType<typeof getStaticProps>
) {
	return <Home />
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

// export async function getStaticProps() {
// 	try {
// 		const { reviews: projectsData } = await fetchHelper<IReviews>('getReviews')

// 		const reviews: IReviewContainerItem[] = projectsData.map(p => ({
// 			imagePath: p.image,
// 			_id: p._id,
// 			name: p.name,
// 			description: p.description,
// 			specialty: p.specialty,
// 		}))

// 		return {
// 			props: { reviews },
// 			revalidate: 100,
// 		}
// 	} catch (error) {
// 		return {
// 			props: {
// 				reviews: [],
// 			},
// 		}
// 	}
// }
