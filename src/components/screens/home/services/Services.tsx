import { FC } from 'react'
import styles from './Services.module.scss'
import SectionContainer from '@/components/ui/section/SectionContainer'

import IoMdCheck from '/public/check.png'
import { BsArrowRight } from 'react-icons/bs'
import ukf from '../../../../../public/Universities/student-girl.png'
import Image from 'next/image'
import Link from 'next/link'
import ServicesItems from './ServicesItems/ServicesItems'
import { serviceItem } from './ServicesItems/serviceItem.interface'
import { useTranslation } from 'react-i18next'
import { useScroll } from '@/hooks/useScroll'

const Services: FC = () => {
	const { t } = useTranslation('common')
	return (
		<section className={styles.services}>
			<div className={styles.containerServices}>
				<div className={styles.main_info}>
					<h1>{t('block_services.title')}</h1>
					<p>{t('block_services.description')}</p>
				</div>

				<div className={styles.wrapper}>
					<div className={styles.item1}>
						<div className={styles.row}>
							<div className={styles.col}>
								<div className={styles.number}>
									{t('block_services.services_items.item1.number')}
								</div>
								<div className={styles.title}>
									{t('block_services.services_items.item1.title')}
								</div>
								<div className={styles.subTitle}>
									{t('block_services.services_items.item1.subTitle')}
								</div>

								<Link
									className={styles.subTitle}
									href={'#universities'}
									onClick={useScroll}
									data-section-id='universities'
								>
									{t('block_services.services_items.item1.link')}
									<BsArrowRight />
								</Link>
							</div>

							<div className={styles.col}>
								<div className={styles.servicesItem}>
									<div className={styles.itemTitle}>
										<div className={styles.uniTitle}>
											{t('block_services.services_items.item1.uniTitle')}
										</div>
										<div className={styles.img}>
											{/* <Image
												src={ukf}
												alt='Ukf - Univerzita Konštantína Filozofa'
												width={350}
												height={247}
											/> */}
										</div>
									</div>

									<div className={styles.subTitle}>
										UKF (Univerzita Konštantína Filozofa)
									</div>

									<Link href={'ukf'}>
										{t('block_services.services_items.item1.btnLink')}
									</Link>
								</div>
							</div>
						</div>
					</div>

					<ServicesItems items={serviceItem} />

					<div className={styles.item1}>
						<div className={styles.row}>
							<div className={styles.col}>
								<div className={styles.title}>
									{t('block_services.services_items.item6.title')}
								</div>
								<div className={styles.subTitle}>
									{t('block_services.services_items.item6.subTitle')}
								</div>

								<Link
									className={styles.subTitle}
									href={'#contacts'}
									onClick={useScroll}
									data-section-id='contacts'
								>
									{t('block_services.services_items.item6.btnLink')}
									<BsArrowRight />
								</Link>
							</div>

							<div className={styles.col}>
								<div className={styles.servicesItemImg}>
									<div className={styles.itemTitle}>
										<div className={styles.imgGirl}>
											{/* <Image
												src={ukf}
												alt='Ukf - Univerzita Konštantína Filozofa'
												width={626}
												height={418}
											/> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Services
