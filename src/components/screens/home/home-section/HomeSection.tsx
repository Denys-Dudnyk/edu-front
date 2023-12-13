import { FC } from 'react'
import styles from './HomeSection.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/section/SectionContainer'
import SectionContainerHome from '@/components/ui/section-home/SectionContainerHome'

import img from '/public/img-girl.svg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useScroll } from '@/hooks/useScroll'

const HomeSection: FC = () => {
	const { t, i18n } = useTranslation('common')

	return (
		<SectionContainerHome id='home' className={styles.home}>
			<div className={styles.homeContainer}>
				<div className={styles.left_side}>
					<h1>{t('h1')}</h1>
					<h2>{t('h2')}</h2>

					<Link
						href={'#universities'}
						onClick={useScroll}
						data-section-id='universities'
					>
						<button>{t('btn')}</button>
					</Link>
				</div>

				<div className={styles.right_side}>
					<div className={styles.oval}>
						<Image
							src={img}
							width={470}
							height={565}
							alt='Education in Europe'
							draggable={false}
							priority
						/>
					</div>
				</div>
			</div>
		</SectionContainerHome>
	)
}

export default HomeSection
