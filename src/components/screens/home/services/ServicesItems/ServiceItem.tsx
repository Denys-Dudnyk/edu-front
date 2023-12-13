import { FC } from 'react'
import { IServiceItem } from './serviceItem.interface'
import styles from './ServicesItems.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const ServiceItem: FC<IServiceItem> = ({ number, subTitle, title }) => {
	const { t } = useTranslation('common')
	return (
		<div className={styles.item}>
			<div className={styles.number}>{t(number)}</div>
			<div className={styles.title}>{t(title)}</div>
			<div className={styles.subTitle}>{t(subTitle)}</div>
		</div>
	)
}
export default ServiceItem
