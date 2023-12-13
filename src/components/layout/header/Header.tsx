import Image from 'next/image'
import Link from 'next/link'
import { FC, useState, useCallback } from 'react'
import styles from './Header.module.scss'
import logo from '/public/logo2.svg'

import HeaderNav from './header-nav/HeaderNav'
import { headerLinks } from './header-nav/header-nav.interface'
import dynamic from 'next/dynamic'
import HamburgerMenu from '@/components/ui/hamburger-menu/HamburgerMenu'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const Hamburger = dynamic(() => import('hamburger-react').then(h => h.Turn), {
	ssr: false,
})

const LinkNoSSR = dynamic(() => import('next/link'), { ssr: false })

const Header: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleBurgerClick = useCallback(() => {
		setIsVisible(!isVisible)
	}, [isVisible])

	const router = useRouter()
	const { t, i18n } = useTranslation('common')
	const { asPath, locale } = useRouter()

	// const changeTo = locale === 'ru' ? 'ua' : 'ru'
	const changeTo = locale === 'ru' ? 'ua' : locale === 'ua' ? 'en' : 'ru'
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Link href='/'>
						<Image
							src={logo}
							className='transition-all hover:scale-110 animate-fade'
							width={200}
							height={48}
							alt='Education in Slovakia'
							draggable={false}
							priority
						/>
					</Link>
					<div className={styles.navContainer}>
						<HeaderNav
							links={headerLinks.links}
							variant='outside'
							setIsVisible={setIsVisible}
						/>
						<div>
							<LinkNoSSR
								href={currentUrl}
								locale={changeTo}
								className='ml-3 text-white bg-blue border-2 border-blue rounded-xl text-sm font-semibold px-3 py-2  transition-all'
							>
								{t('change-locale', { changeTo })}
							</LinkNoSSR>
						</div>
						<span>
							<Hamburger
								rounded
								label='Show menu'
								distance='sm'
								size={30}
								duration={0.5}
								toggled={isVisible}
								onToggle={() => handleBurgerClick()}
							/>
						</span>
					</div>
				</div>
			</header>
			<HamburgerMenu show={isVisible} setIsVisible={setIsVisible} />
		</>
	)
}
export default Header
