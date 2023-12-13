import SingleProductPage from '@/components/ui/single-product/SingleProductPage'
import { ProductService } from '@/services/product.service'
import { IProduct } from '@/shared/types/product.types'

import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next'

import Error404 from '../404'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = { _props: InferGetStaticPropsType<typeof getStaticProps> }

interface IProductPage {
	product: IProduct
	// _props: InferGetStaticPropsType<typeof getStaticProps>
}

const ProductPage: NextPage<IProductPage> = ({ product }) => {
	return product ? <SingleProductPage product={product} /> : <Error404 />
}

// export const GetStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
// 	props: {
// 		...(await serverSideTranslations(locale ?? 'ru', ['common', 'footer'])),
// 	},
// })

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
	try {
		const { _nextI18Next } = await serverSideTranslations(locale ?? 'ru', [
			'common',
			'contactform',
			'footer',
			'subscriptions',
		])
		const { data: product } = await ProductService.getBySlug(
			String(params?.slug)
		)

		return {
			props: {
				product,
				_nextI18Next,
			},

			revalidate: 10,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: products } = await ProductService.getAll()
		const paths = products.map(p => ({
			params: { slug: p.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export default ProductPage
