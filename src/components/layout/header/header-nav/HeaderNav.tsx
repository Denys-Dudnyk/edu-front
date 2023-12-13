import { FC } from 'react'
import styles from './HeaderNav.module.scss'
import { IHeaderNav } from './header-nav.interface'
import clsx from 'clsx'
import HeaderNavItem from './HeaderNavItem'
import { useOutside } from '@/hooks/useOutside'
// import Button from '@/components/ui/button/Button'

import Modal from '@/components/ui/modal/Modal'
import Form from '@/components/ui/form/Form'
import { useTranslation } from 'react-i18next'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/ui/button/Button'), {
	ssr: false,
})

const HeaderNav: FC<IHeaderNav> = ({ links, setIsVisible, variant }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { t } = useTranslation(['common', 'contactform'])

	return (
		<>
			<nav>
				<ul
					className={clsx(styles.nav, {
						[styles.verticalNav]: variant === 'inside',
					})}
				>
					{variant === 'outside'}
					{links.map(l => (
						<HeaderNavItem
							link={l.link}
							text={l.text}
							text2={l.text2}
							text3={l.text3}
							data_id={l.data_id}
							key={l.link}
							setIsVisible={setIsVisible}
							variant={variant}
						/>
					))}
					<Button onClick={() => setIsShow(true)} title='Contact'>
						{t('Contact_us')}
					</Button>
				</ul>
			</nav>
			<Modal
				isShow={isShow}
				setIsShow={setIsShow}
				title={t('contactform:title')}
				ref={ref}
			>
				<Form />
			</Modal>
		</>
	)
}
export default HeaderNav
