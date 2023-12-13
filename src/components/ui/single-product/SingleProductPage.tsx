import { IProduct } from '@/shared/types/product.types'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SingleProductPage.module.scss'
import parse from 'html-react-parser'
import Footer from '@/components/layout/footer/Footer'
import { FcCheckmark } from 'react-icons/fc'
// import Meta from '@/shared/meta/Meta'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import UniDescription from './university/UniDescription'
import PermitDescription from './permit/PermitDescription'
import DormitoryDescription from './dormitory/DormtoryDescription'
import InfoHelpDescription from './infohelp/InfoHelpDescription'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'
import { useScroll } from './../../../hooks/useScroll'

interface IProductSinglePage {
	product: IProduct
}
const Meta = dynamic(() => import('@/shared/meta/Meta'), {
	ssr: false,
})
export const SingleProductPage: FC<IProductSinglePage> = ({ product }) => {
	// const order = product.university
	// const emptyOrder = Object.keys(order).length === 0

	const { locale } = useRouter()

	const localeTitle =
		locale === 'ru'
			? product.title
			: locale === 'ua'
			? product.titleUA
			: product.titleEN

	const localeDescriptionItem =
		locale === 'ru'
			? product.descriptionItem
			: locale === 'ua'
			? product.descriptionItemUA
			: product.descriptionItemEN

	const { t } = useTranslation('subscriptions')

	return (
		<Meta title={localeTitle} description={localeDescriptionItem}>
			<div className={styles.containerSingleProduct}>
				<div className={styles.title}>
					<h1>
						{/* {product.title} */}
						{/* {locale !== 'ru' ? product.titleUA : product.title} */}
						{localeTitle}
					</h1>
				</div>
				<div className={styles.productContainer}>
					<div className={styles.left}>
						<p>{localeDescriptionItem}</p>
						<div className={styles.price}>
							{product.price}
							<span>{product.oldPrice}</span>
						</div>
						<div className={styles.link}>
							<Link
								href={'#moreinfo'}
								onClick={useScroll}
								data-section-id='moreinfo'
							>
								{t('btn')}
							</Link>
						</div>
					</div>
					<div className={styles.right}>
						<Image
							alt={product.title}
							src={product.image}
							width={240}
							height={180}
							draggable={false}
							priority
						/>
					</div>
				</div>

				<div className={styles.description}>
					<div className={styles.links} id='moreinfo'>
						<Link
							href={'#package-info'}
							onClick={useScroll}
							data-section-id='package-info'
						>
							{t('package-info')}
						</Link>
						<Link href={'#result'} onClick={useScroll} data-section-id='result'>
							{product.slug === 'premium' ? [] : t('package-notInfo')}
						</Link>
					</div>
					<div className={styles.info}>
						<p>{t('info1')}</p>
						<br />
						<p>{t('info2')}</p>
					</div>
					<div className={styles.aboutPackageContainer}>
						<div className={styles.aboutPackage}>
							<h2 id='package-info'>{`${t(
								'package-info2'
							)} ${localeTitle}?`}</h2>

							{product.slug === 'standart' ? (
								<UniDescription uni={product} key={product.title} />
							) : (
								[]
							)}

							{product.slug === 'optimum' ? (
								<PermitDescription permit={product} key={product.title} />
							) : (
								[]
							)}
						</div>

						{product.slug === 'standart' ? (
							<div className={styles.aboutResult}>
								<h2 id='result'>{t('package-notInfo')}</h2>
								<div>
									{parse(
										`${
											locale === 'ru'
												? product.result?.item1
												: t('standart.not-included')
										}`
									)}
								</div>
							</div>
						) : (
							[]
						)}

						{product.slug === 'optimum' ? (
							<div className={styles.aboutResult}>
								<h2 id='result'>{t('package-notInfo')}</h2>
								<div>
									{parse(
										`${
											locale === 'ru'
												? product.result?.item1
												: t('optimum.not-included')
										}`
									)}
								</div>
							</div>
						) : (
							[]
						)}

						{product.slug === 'premium' ? (
							<div className={styles.aboutResult}>
								<div>
									{parse(
										`${
											locale === 'ru'
												? product.result?.item1
												: t('premium.all-included')
										}`
									)}
								</div>
							</div>
						) : (
							[]
						)}
					</div>
				</div>
			</div>

			<Footer />
		</Meta>
	)
}

export default SingleProductPage
