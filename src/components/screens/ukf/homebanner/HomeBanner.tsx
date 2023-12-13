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
								<div className={styles.title}>
									Univerzita Konštantína Filozofa v Nitre
								</div>

								<div className={styles.row}>
									<div className={styles.col}>
										<h1>{t('universities.ukf.name')}</h1>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.bannerBottom}>
						<div className={styles.row}>
							<div className={styles.col}>{t('universities.ukf.info')}</div>
							<div className={styles.btn}>
								<Link href='https://www.ukf.sk/' target='_blank'>
									{t('universities.ukf.webpage')}
								</Link>
							</div>
						</div>
						<div className={styles.items_info}>
							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.ukf.originalName')}
								</div>
								<div className={styles.subtitle}>
									Univerzita Konštantína Filozofa v Nitre
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.ukf.internationalName')}
								</div>
								<div className={styles.subtitle}>
									Constantine the Philosopher University in Nitra
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.ukf.year')}
								</div>
								<div className={styles.subtitle}>1959</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.ukf.type')}
								</div>
								<div className={styles.subtitle}>
									{t('universities.ukf.public')}
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.ukf.rector')}
								</div>
								<div className={styles.subtitle}>
									{t('universities.ukf.rectorName')}
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
