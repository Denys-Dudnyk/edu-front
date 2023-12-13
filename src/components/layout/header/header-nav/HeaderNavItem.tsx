import clsx from 'clsx'
import { FC, useEffect } from 'react'
import styles from './HeaderNav.module.scss'
import { IHeaderNavItem } from './header-nav.interface'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useScroll } from './../../../../hooks/useScroll'
import { redirect } from 'next/navigation'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const HeaderNavItem: FC<IHeaderNavItem> = ({
	link,
	setIsVisible,
	text,
	text2,
	text3,
	variant,
	data_id,
}) => {
	const { locale, pathname, query, replace, push } = useRouter()

	const changeTo = locale === 'ru' ? 'ua' : locale === 'ua' ? 'en' : 'ru'

	return (
		<li
			className={clsx({
				[styles.link]: variant === 'outside',
				[styles.verticalLink]: variant === 'inside',
			})}
			onClick={() => setIsVisible(false)}
		>
			<Link href={link} scroll={false}>
				{changeTo === 'ua' ? text : text2 && changeTo === 'en' ? text2 : text3}
			</Link>
		</li>
	)
}
export default HeaderNavItem
