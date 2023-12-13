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
									Univerzita Mateja Bela v Banskej Bystrici
								</div>

								<div className={styles.row}>
									<div className={styles.col}>
										<h1>{t('universities.umb.name')}</h1>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.bannerBottom}>
						<div className={styles.row}>
							<div className={styles.col}>{t('universities.umb.info')}</div>
							<div className={styles.btn}>
								<Link href='https://www.umb.sk/' target='_blank'>
									{t('universities.umb.webpage')}
								</Link>
							</div>
						</div>
						<div className={styles.items_info}>
							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.umb.originalName')}
								</div>
								<div className={styles.subtitle}>
									Univerzita Mateja Bela v Banskej Bystrici
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.umb.internationalName')}
								</div>
								<div className={styles.subtitle}>
									Matej Bel University in Banská Bystrica
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.umb.year')}
								</div>
								<div className={styles.subtitle}>1992</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.umb.type')}
								</div>
								<div className={styles.subtitle}>
									{t('universities.umb.public')}
								</div>
							</div>

							<div className={styles.item}>
								<div className={styles.subtitle}>
									{t('universities.umb.rector')}
								</div>
								<div className={styles.subtitle}>
									{t('universities.umb.rectorName')}
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
