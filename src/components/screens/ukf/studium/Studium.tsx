import { FC } from 'react'
import styles from './Studium.module.scss'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { IUkf } from '@/shared/types/ukfFF.types'
import UkfFF from './UkfFF/UkfFF'
import Fpvai from './Fpvai/Fpvai'
import AccordionFpvai from './Fpvai/AccordionFpvai'
import { useFpvai, useFss, usePf } from './useUkf'
import AccordionFss from './Fss/AccordionFss'
import AccordionPf from './Pf/AccordionPf'
import { useTranslation } from 'react-i18next'

const Studium: FC<{ menu: IUkf }> = ({ menu: { ukfFF } }) => {
	const { data } = useFpvai()
	const { data: dataFss } = useFss()
	const { data: dataPf } = usePf()

	const { t } = useTranslation('common')

	return (
		<section className={styles.studium}>
			<div className={styles.studiumContainer}>
				<div className={styles.studiumCont}>
					<div className={styles.title}>{t('block_ukf.faculty')}</div>

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
								{t('block_ukf.ff')}
							</Typography>
						</AccordionSummary>

						<AccordionDetails sx={{ padding: '0 24px 16px' }}>
							{ukfFF.map((item, index) => (
								<UkfFF item={item} key={index} />
							))}
						</AccordionDetails>
					</Accordion>

					<AccordionFpvai menu={{ ukfFF: data || [] }} />
					<AccordionFss menu={{ ukfFF: dataFss || [] }} />
					<AccordionPf menu={{ ukfFF: dataPf || [] }} />
				</div>
			</div>
		</section>
	)
}
export default Studium
