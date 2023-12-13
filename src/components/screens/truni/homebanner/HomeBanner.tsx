import { FC } from 'react'
import styles from './HomeBanner.module.scss'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
const HomeBanner: FC = () => {
	const { t } = useTranslation('common')
	return (
		<section className={styles.homebanner}>
			<div className={styles.bannerContainer}>
				<div className={styles.homeBannerCont}>
					<div className={styles.bannerTop}>
						<div className={styles.bg}></div>
						<div className={styles.homeBanner_info}>
							<div className={styles.uniName}>
								<div className={styles.title}>Trnavská univerzita v Trnave</div>

								<div className={styles.row}>
									<div className={styles.col}>
										<h1>{t('universities.truni.name')}</h1>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.bannerBottom}>
						<div className={styles.row}>
							<div className={styles.col}>{t('universities.truni.info')}</div>
							<div className={styles.btn}>
								<Link href='https://www.truni.sk/' target='_blank'>
									{t('universities.truni.webpage')}
								</Link>
							</div>
						</div>
						<div className={styles.items_info}>
							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.truni.originalName')}
								</div>
								<div className={styles.subtitle}>
									Trnavská univerzita v Trnave
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.truni.internationalName')}
								</div>
								<div className={styles.subtitle}>
									Trnava University in Trnava
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.truni.year')}
								</div>
								<div className={styles.subtitle}>1635</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.truni.type')}
								</div>
								<div className={styles.subtitle}>
									{t('universities.truni.public')}
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.truni.rector')}
								</div>
								<div className={styles.subtitle}>
									{t('universities.truni.rectorName')}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HomeBanner
