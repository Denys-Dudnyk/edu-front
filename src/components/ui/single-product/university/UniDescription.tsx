import { FC } from 'react'
import styles from '../SingleProductPage.module.scss'
import { IProduct } from '@/shared/types/product.types'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

interface IUniSection {
	uni: IProduct
}
const UniDescription: FC<IUniSection> = ({ uni }) => {
	const { locale } = useRouter()

	const { t } = useTranslation('subscriptions')
	return (
		<>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item1 : t('standart.item1')}
					</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item2 : t('standart.item2')}
					</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item3 : t('standart.item3')}
					</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item4 : t('standart.item4')}
					</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item5 : t('standart.item5')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item6 : t('standart.item6')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item7 : t('standart.item7')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item8 : t('standart.item8')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item9 : t('standart.item9')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item10 : t('standart.item10')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? uni.university?.item11 : t('standart.item11')}
					</div>
				</div>
			</div>
		</>
	)
}
export default UniDescription
