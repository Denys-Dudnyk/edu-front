import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.scss'
import logo from '/public/logo2.svg'

import { BsWhatsapp, BsTelegram, BsInstagram } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
const Footer: FC = () => {
	const { t } = useTranslation('footer')
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.col_md_3}>
						<Link href='/'>
							<Image
								src={logo}
								className='transition-all hover:scale-110 animate-fade '
								width={200}
								height={147}
								alt='Reviewer1'
								draggable={false}
								priority
							/>
						</Link>
						2023 © Education in Slovakia
						<br />
					</div>
					<div className={styles.col}>
						<div className={styles.colTitle}>{t('links')}</div>
						<div className={styles.col_text}>
							<ul>
								<li>
									<Link href='/#home' scroll={false}>
										{t('home')}
									</Link>
								</li>
								<li>
									<Link href='/#universities' scroll={false}>
										{t('university')}
									</Link>
								</li>
								<li>
									<Link href='/#products' scroll={false}>
										{t('prices')}
									</Link>
								</li>

								<li>
									<Link href='/#contacts' scroll={false}>
										{t('contacts')}
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.colTitle}>{t('contacts')}</div>
						<div className={styles.col_text}>
							<ul>
								<li>
									<h1>Education in Slovakia (IČO : 55636373)</h1>
								</li>
								<li>
									<Link href='tel:+421950659615'>+421950659615</Link>
								</li>
								<li>
									<Link href='mailto:info@edu-slovakia.com'>
										info@edu-slovakia.com
									</Link>
								</li>
								<li>
									<h1>Lermontovova 911/3, 81105 Bratislava - Staré Mesto</h1>
								</li>
							</ul>
						</div>
					</div>

					<div className={styles.col}>
						{/* <div className={styles.colTitle}>Contact</div> */}
						<div className={styles.col_text}>
							<ul>
								<li>
									<div className={styles.whatsapp}>
										<Link
											href='https://wa.me/421950659615?text=Здравствуйте!%20я%20интересуюсь%20образованием%20в%20Словакии'
											className={styles.whatsappItem}
										>
											<BsWhatsapp />
											{t('whatsapp')}
										</Link>
									</div>
								</li>
								<li>
									<div className={styles.telegram}>
										<Link
											href='https://t.me/educationInSlovakia'
											className={styles.telegramItem}
										>
											<BsTelegram />
											{t('telegram')}
										</Link>
									</div>
								</li>
								<li>
									<div className={styles.instagram}>
										<Link
											href='https://www.instagram.com/edu_slovakia/'
											className={styles.instagramItem}
										>
											<BsInstagram />
											{t('instagram')}
										</Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
