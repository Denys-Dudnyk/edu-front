import { FC } from 'react'
import styles from '../SingleProductPage.module.scss'
import { IProduct } from '@/shared/types/product.types'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

interface IPermitSection {
	permit: IProduct
}
const PermitDescription: FC<IPermitSection> = ({ permit }) => {
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
						{locale === 'ru' ? permit.permit?.item1 : t('optimum.item1')}
					</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item2 : t('optimum.item2')}
					</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item3 : t('optimum.item3')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item4 : t('optimum.item4')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item5 : t('optimum.item5')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item6 : t('optimum.item6')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item7 : t('optimum.item7')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item8 : t('optimum.item8')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item9 : t('optimum.item9')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item10 : t('optimum.item10')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item11 : t('optimum.item11')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item12 : t('optimum.item12')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item13 : t('optimum.item13')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item14 : t('optimum.item14')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item15 : t('optimum.item15')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item16 : t('optimum.item16')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item17 : t('optimum.item17')}
					</div>
				</div>
			</div>

			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>
						{locale === 'ru' ? permit.permit?.item18 : t('optimum.item18')}
					</div>
				</div>
			</div>
		</>
	)
}
export default PermitDescription
