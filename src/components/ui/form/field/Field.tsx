import { forwardRef } from 'react'
import { Input } from '@material-tailwind/react'
import styles from './Field.module.scss'
import clsx from 'clsx'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type, error, ...rest }, ref) => {
		return (
			<div
				className={clsx(styles.field, {
					[styles.errorField]: error,
				})}
			>
				<label>
					{/* <span>{placeholder}</span> */}
					{/* <input type={type} ref={ref} {...rest} /> */}
					{/*@ts-ignore */}
					<Input
						/*@ts-ignore */
						color='orange'
						variant='standard'
						label={placeholder}
						type={type}
						ref={ref}
						{...rest}
					/>
				</label>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
