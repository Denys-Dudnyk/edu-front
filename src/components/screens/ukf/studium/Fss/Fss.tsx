import { FC } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import parse from 'html-react-parser'

import { IUkfItem } from '@/shared/types/ukfFF.types'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
// import HarmDialog from '@/components/ui/Dialog/HarmDialog'

const Fss: FC<{ item: IUkfItem }> = ({
	item: {
		deadline,
		description,
		language,
		length,
		name,
		nameUA,
		nameEN,
		lengthUA,
		lengthEN,
		languageUA,
		languageEN,
		descriptionUA,
		descriptionEN,
	},
}) => {
	const { t } = useTranslation('common')

	const { locale } = useRouter()

	const localeName = locale === 'ru' ? name : locale === 'ua' ? nameUA : nameEN
	const localeLength =
		locale === 'ru' ? length : locale === 'ua' ? lengthUA : lengthEN
	const localeLanguage =
		locale === 'ru' ? language : locale === 'ua' ? languageUA : languageEN
	const localeDescription =
		locale === 'ru'
			? description
			: locale === 'ua'
			? descriptionUA
			: descriptionEN
	return (
		<Accordion
			sx={{
				// display: { flex: '0 0 66.666667%' },

				// maxWidth: '65.656667%',
				borderTopLeftRadius: '15px !important',
				borderTopRightRadius: '15px !important',
				borderRadius: '8px !important',
				border: '1px solid #e7e7e7',
				':before': {
					display: 'none',
				},
				mb: '1rem',
				boxShadow: 'none',
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
				sx={{
					padding: '0 24px',
				}}
			>
				<Typography color='#555555' fontWeight={'700'} fontSize={'15px'}>
					{localeName}
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					padding: '0 24px ',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					paddingBottom: '16px',
				}}
			>
				<div>
					<div className='text-sm '>
						<span className=' font-bold'>{t('block_ukf.length')}</span>:{' '}
						{localeLength}
						&nbsp;
					</div>
					<div className='text-sm'>
						<span className=' font-bold'>{t('block_ukf.language')}</span>:{' '}
						{localeLanguage}
					</div>
					<div className='text-sm'>
						<span className=' font-bold'>{t('block_ukf.deadline')}</span>:{' '}
						{deadline}
					</div>
					<br />
					<div className='text-sm'>
						<span className=' font-bold'>{t('block_ukf.description')}</span>
						<br />
						{parse(String(localeDescription))}
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	)
}
export default Fss
