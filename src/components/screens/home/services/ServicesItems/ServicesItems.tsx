import { FC } from 'react'
import styles from './ServicesItems.module.scss'
import { IServiceItems } from './serviceItem.interface'
import ServiceItem from './ServiceItem'
const ServicesItems: FC<{ items: IServiceItems }> = ({ items: { items } }) => {
	return (
		<>
			{items.map(i => (
				<ServiceItem
					key={i.number}
					number={i.number}
					title={i.title}
					subTitle={i.subTitle}
				/>
			))}
		</>
	)
}
export default ServicesItems
