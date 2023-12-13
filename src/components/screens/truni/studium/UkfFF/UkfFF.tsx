import { FC } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import parse from 'html-react-parser'

import { IUkfItem } from '@/shared/types/ukfFF.types'
// import HarmDialog from '@/components/ui/Dialog/HarmDialog'

const UkfFF: FC<{ item: IUkfItem }> = ({
	item: { deadline, description, language, length, name },
}) => {
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
					{name}
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
						<span className=' font-bold'>Длина обучения</span>: {length}&nbsp;
					</div>
					<div className='text-sm'>
						<span className=' font-bold'>Язык обучения</span>: {language}
					</div>
					<div className='text-sm'>
						<span className=' font-bold'>Крайний срок подачи заявок</span>:
						{deadline}
					</div>
					<br />
					<div className='text-sm'>
						<span className=' font-bold'>Трудоустройство выпускников</span>
						<br />
						{parse(description)}
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	)
}
export default UkfFF
