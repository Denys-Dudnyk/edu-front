import { FC } from 'react'
import styles from './AboutUni.module.scss'
import Link from 'next/link'
import SectionContainer from '@/components/ui/section/SectionContainer'
import Image from 'next/image'
import truni from '/public/Universities/truni.png'
import ukf from '/public/Universities/ukf1.png'
import umb from '/public/Universities/umb.png'
import Button from '@/components/ui/button/Button'
import { useTranslation } from 'react-i18next'

const AboutUni: FC = () => {
	const { t } = useTranslation('common')
	return (
		<SectionContainer id='universities' className={styles.about}>
			<div className={styles.containerAbout}>
				<h1>{t('block_university.title')}</h1>

				<div className={styles.elements}>
					<div>
						<Link href={'/ukf'}>
							<Image
								src={ukf}
								width={295}
								height={119}
								alt='Education in Europe'
								draggable={false}
								priority
							/>
						</Link>
						<Link href={'/ukf'}>
							<Button>{t('block_university.btn_more')}</Button>
						</Link>
					</div>
					<div>
						<Link href={'/umb'}>
							<Image
								src={umb}
								width={530}
								height={110}
								alt='Education in Europe'
								draggable={false}
								priority
							/>
						</Link>
						<Link href={'/umb'}>
							<Button>{t('block_university.btn_more')}</Button>
						</Link>
					</div>
					<div>
						<Link href={'/truni'}>
							<Image
								src={truni}
								width={295}
								height={119}
								alt='Education in Europe'
								draggable={false}
								className={''}
								priority
							/>
						</Link>
						<Link href={'/truni'}>
							<Button>{t('block_university.btn_more')}</Button>
						</Link>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}
export default AboutUni
