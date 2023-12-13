import { validateEmail, validateTel } from '@/shared/validateEmail'
import {
	IContactState,
	IContactData,
	IMovieEditInput,
} from './contact-interface'
import Field from '../field/Field'
import dynamic from 'next/dynamic'
import { Controller, useForm } from 'react-hook-form'
import { useProducts } from './useProducts'
import { useTranslation } from 'react-i18next'

const DynamicSelect = dynamic(() => import('../field/Field'), {
	ssr: false,
})

export default function ContactContainer({
	register,
	formState: { errors },
}: IContactState) {
	const { data: product } = useProducts()

	const { t } = useTranslation('contactform')

	return (
		<>
			<Field
				{...register('name', {
					required: 'Заполните пожалуйста Имя',
				})}
				placeholder={'Name'}
				type='text'
				error={errors.name?.message}
			/>
			<Field
				{...register('email', {
					required: 'Заполните пожалуйста E-mail',
					pattern: {
						value: validateEmail,
						message: 'Enter valid e-mail',
					},
				})}
				placeholder='E-mail'
				type='email'
				error={errors.email?.message}
			/>

			{/* <Controller
				control={control}
				name='title'
				render={({ field, fieldState: { error } }) => (
					<DynamicSelect
						field={field}
						options={product || []}
						isMulti
						placeholder='Products'
						error={error?.message}
					/>
				)}
				rules={{
					required: 'Please select at least one product!',
				}}
			/> */}

			{/* <Field
				{...register('subject', {
					required: 'Subject is required',
				})}
				placeholder='Subject'
				type='text'
				error={errors.subject?.message}
			/> */}

			<Field
				{...register('message', {
					required: 'Заполните пожалуйста Сообщение',
				})}
				placeholder={'Massage'}
				type='text'
				error={errors.message?.message}
			/>

			{/* <Field
				{...register('telephone', {
					required: 'Заполните пожалуйста Сообщение',
				})}
				id='phone'
				placeholder='Телефон'
				type='tel'
				error={errors.telephone?.message}
			/> */}
		</>
	)
}
