import { FC } from 'react'
import styles from './Form.module.scss'
import Button from '../button/Button'
import Link from 'next/link'
import { useFormPost } from './useForm'
import { IContactData } from './contact-container/contact-interface'
import { useForm } from 'react-hook-form'
import ContactContainer from './contact-container/ContactContainer'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const DynamicSelect = dynamic(() => import('../button/Button'), {
	ssr: false,
})

const Form: FC = () => {
	const { reset, formState, handleSubmit, register, control } =
		useForm<IContactData>({
			mode: 'onChange',
		})

	const { onSubmit } = useFormPost(reset)

	const { t } = useTranslation('contactform')

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<ContactContainer register={register} formState={formState} />
			<DynamicSelect className={styles.formButton}>{t('send')}</DynamicSelect>
			<p>
				This site is protected by reCAPTCHA and the
				<Link
					href='https://policies.google.com/privacy'
					target='_blank'
					rel='noreferrer noopener'
				>
					Google Privacy Policy
				</Link>
				and
				<Link
					href='https://policies.google.com/terms'
					target='_blank'
					rel='noreferrer noopener'
				>
					Terms of Service
				</Link>
				apply.
			</p>
		</form>
	)
}
export default Form
