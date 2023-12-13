import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IMenuItem } from '../interface/product.interface'

import styles from '../Products.module.scss'
import { URL } from 'url'

import background from '/public/itemGirl/itemGirl1.jpg'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
// import { url } from 'inspector'

const ProductItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { locale } = useRouter()
	const { t } = useTranslation('subscriptions')

	const localeTitle =
		locale === 'ru' ? item.title : locale === 'ua' ? item.titleUA : item.titleEN

	const localeDescription =
		locale === 'ru'
			? item.description
			: locale === 'ua'
			? item.descriptionUA
			: item.descriptionEN

	return (
		<div className={styles.container}>
			<div
				className={styles.itemImg}
				style={{
					backgroundImage: `url(${item.image})`,
				}}
			></div>
			{/* <div className={styles.block}> */}
			<div className={styles.chit} hidden>
				{t('bestseller')}
			</div>
			{/* </div> */}

			<div className={styles.item}>
				{/* <div className={styles.image}>
				<Link href={item.link}>
					<Image
						alt={item.title}
						src={item.icon}
						width={240}
						height={225}
						draggable={false}
						priority
					/>
				</Link>
			</div> */}
				<div className={styles.title}>{localeTitle}</div>
				<div className={styles.subtitle}> {localeDescription}</div>
				<div className={styles.itemButton}>
					<div className={styles.price}>
						<span>{item.oldPrice}</span>
						{item.price}
					</div>
					<Link href={item.link} about={item.title}>
						<button>{t('btn')}</button>
					</Link>
				</div>
				{/* <div
				className={styles.itemImg}
				style={{
					backgroundImage: `url(${item.image})`,
				}}
			></div> */}
			</div>
		</div>
	)
}
export default ProductItem
