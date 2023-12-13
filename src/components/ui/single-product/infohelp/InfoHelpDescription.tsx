import { FC } from 'react'
import styles from '../SingleProductPage.module.scss'
import { IProduct } from '@/shared/types/product.types'

interface IInfoHelpSection {
	infohelp: IProduct
}
const InfoHelpDescription: FC<IInfoHelpSection> = ({ infohelp }) => {
	return (
		<>
			<h3>Информационная поддержка</h3>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item1}</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item2}</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item3}</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item4}</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item5}</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item6}</div>
				</div>
			</div>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{infohelp.infohelp?.item7}</div>
				</div>
			</div>
		</>
	)
}
export default InfoHelpDescription
