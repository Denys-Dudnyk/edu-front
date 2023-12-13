import { FC } from 'react'
import styles from './Contacts.module.scss'
import Link from 'next/link'
import Form from '@/components/ui/form/Form'
import { MdOutlineMailOutline } from 'react-icons/md'
import SectionContainer from '@/components/ui/section/SectionContainer'
import { useTranslation } from 'react-i18next'

const Contacts: FC = () => {
	const { t } = useTranslation('contactform')
	return (
		<SectionContainer id='contacts' className={styles.contacts}>
			<div className={styles.containerContacts}>
				<div className={styles.left_side}>
					<h2>{t('title')}</h2>
					<Form />
				</div>
				<div className={styles.right_side}>
					<li className='HeaderNav_link__jMlJr'>
						<MdOutlineMailOutline />
						<Link
							href='mailto:
info@edu-slovakia.com'
						>
							info@edu-slovakia.com
						</Link>
					</li>
				</div>
			</div>
		</SectionContainer>
	)
}
export default Contacts
