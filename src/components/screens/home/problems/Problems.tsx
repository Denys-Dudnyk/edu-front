import SectionContainer from '@/components/ui/section/SectionContainer'
import { FC } from 'react'
import styles from './Problems.module.scss'
import IoMdCheck from '/public/check.png'
import IoMdClose from '/public/iconClose.png'

import { ImCheckmark } from 'react-icons/im'
import { VscChromeClose } from 'react-icons/vsc'
import Image from 'next/image'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
const Problems: FC = () => {
	const { t } = useTranslation('common')
	return (
		<SectionContainer className={styles.problems}>
			<div className={styles.containerProblems}>
				<h1>{t('block_problems.title')}</h1>

				<div className={styles.row}>
					<div className={styles.col}>
						<div className={styles.productItem}>
							<Image src={IoMdClose} alt='Close' />
							{t('block_problems.product_items.item1')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem2}>
							<Image src={IoMdCheck} alt='Check' />
							{t('block_problems.product_items.item2')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem}>
							<Image src={IoMdClose} alt='Close' />
							{t('block_problems.product_items.item3')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem2}>
							<Image src={IoMdCheck} alt='Check' />
							{t('block_problems.product_items.item4')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem}>
							<Image src={IoMdClose} alt='Close' />
							{t('block_problems.product_items.item5')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem2}>
							<Image src={IoMdCheck} alt='Check' />
							{t('block_problems.product_items.item6')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem}>
							<Image src={IoMdClose} alt='Close' />
							{t('block_problems.product_items.item7')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem2}>
							<Image src={IoMdCheck} alt='Check' />
							{t('block_problems.product_items.item8')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem}>
							<Image src={IoMdClose} alt='Close' />
							{t('block_problems.product_items.item9')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem2}>
							<Image src={IoMdCheck} alt='Check' />
							{t('block_problems.product_items.item10')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem}>
							<Image src={IoMdClose} alt='Close' />
							{t('block_problems.product_items.item11')}
						</div>
					</div>

					<div className={styles.col}>
						<div className={styles.productItem2}>
							<Image src={IoMdCheck} alt='Check' />
							{t('block_problems.product_items.item12')}
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}
export default Problems
