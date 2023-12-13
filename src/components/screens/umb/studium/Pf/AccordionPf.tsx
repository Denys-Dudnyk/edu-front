import { FC } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IUkf } from '@/shared/types/ukfFF.types'

import Pf from './Pf'

const AccordionPf: FC<{ menu: IUkf }> = ({ menu: { ukfFF } }) => {
	return (
		<Accordion
			sx={{
				// display: { flex: '0 0 66.666667%' },
				padding: '5px 10px',
				maxWidth: { xs: '100%', md: '100%' },
				borderTopLeftRadius: '15px !important',
				borderTopRightRadius: '15px !important',
				borderRadius: '4px !important',
				border: '1px solid #e7e7e7',
				':before': {
					display: 'none',
				},
				mt: '1rem',
				boxShadow: 'none',
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
				sx={{
					padding: '0 24px',
					// margin: ' 24px',
					// bgcolor: '#0069c8',
				}}
			>
				<Typography color='#212529' fontWeight={'500'} fontSize={'14px'}>
					Педагогический факультет
				</Typography>
			</AccordionSummary>

			<AccordionDetails sx={{ padding: '0 24px 16px' }}>
				{ukfFF.map(item => (
					<Pf item={item} key={item._id} />
				))}
			</AccordionDetails>
		</Accordion>
	)
}
export default AccordionPf
