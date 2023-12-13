import { FC } from 'react'
import styles from '../SingleProductPage.module.scss'
import { IProduct } from '@/shared/types/product.types'

interface IDormitorySection {
	dormitory: IProduct
}
const DormitoryDescription: FC<IDormitorySection> = ({ dormitory }) => {
	return (
		<>
			<h3>Бронирование жилья</h3>
			<div className={styles.aboutDescription}>
				<div className={styles.circle}>
					<div>✔︎</div>
				</div>
				<div className={styles.item}>
					<div>{dormitory.dormitory?.item1}</div>
				</div>
			</div>
		</>
	)
}
export default DormitoryDescription
