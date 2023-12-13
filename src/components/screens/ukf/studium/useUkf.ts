import { useQuery } from 'react-query'

import { getProductUrl } from '@/config/url.config'

import { ReviewService } from '@/services/review.service'
import { IReviewsItem } from '@/shared/types/review.types'
import {
	FpvaiService,
	FssService,
	PfService,
	UkfService,
} from '@/services/ukf.service'
import { IUkfItem } from '@/shared/types/ukfFF.types'

export const useUkf = () => {
	const queryData = useQuery(['ukf predmets'], () => UkfService.getAll(), {
		select: ({ data }) =>
			data
				.filter(product => product.name)
				.map(
					ukf =>
						({
							name: ukf.name,
							description: ukf.description,
							deadline: ukf.deadline,
							language: ukf.language,
							length: ukf.length,

							nameUA: ukf.nameUA,

							nameEN: ukf.nameEN,

							lengthUA: ukf.lengthUA,

							lengthEN: ukf.lengthEN,

							languageUA: ukf.languageUA,

							languageEN: ukf.languageEN,

							descriptionUA: ukf.descriptionUA,

							descriptionEN: ukf.descriptionEN,
						} as IUkfItem)
				),
	})

	return queryData
}

export const useFpvai = () => {
	const queryData = useQuery(['fpvai'], () => FpvaiService.getAll(), {
		select: ({ data }) =>
			data
				.filter(product => product.name)
				.map(
					ukf =>
						({
							name: ukf.name,
							description: ukf.description,
							deadline: ukf.deadline,
							language: ukf.language,
							length: ukf.length,
							nameUA: ukf.nameUA,

							nameEN: ukf.nameEN,

							lengthUA: ukf.lengthUA,

							lengthEN: ukf.lengthEN,

							languageUA: ukf.languageUA,

							languageEN: ukf.languageEN,

							descriptionUA: ukf.descriptionUA,

							descriptionEN: ukf.descriptionEN,
						} as IUkfItem)
				),
	})

	return queryData
}

export const useFss = () => {
	const queryData = useQuery(['fss'], () => FssService.getAll(), {
		select: ({ data }) =>
			data
				.filter(product => product.name)
				.map(
					ukf =>
						({
							name: ukf.name,
							description: ukf.description,
							deadline: ukf.deadline,
							language: ukf.language,
							length: ukf.length,

							nameUA: ukf.nameUA,

							nameEN: ukf.nameEN,

							lengthUA: ukf.lengthUA,

							lengthEN: ukf.lengthEN,

							languageUA: ukf.languageUA,

							languageEN: ukf.languageEN,

							descriptionUA: ukf.descriptionUA,

							descriptionEN: ukf.descriptionEN,
						} as IUkfItem)
				),
	})

	return queryData
}

export const usePf = () => {
	const queryData = useQuery(['pf'], () => PfService.getAll(), {
		select: ({ data }) =>
			data
				.filter(product => product.name)
				.map(
					ukf =>
						({
							name: ukf.name,
							description: ukf.description,
							deadline: ukf.deadline,
							language: ukf.language,
							length: ukf.length,
							nameUA: ukf.nameUA,

							nameEN: ukf.nameEN,

							lengthUA: ukf.lengthUA,

							lengthEN: ukf.lengthEN,

							languageUA: ukf.languageUA,

							languageEN: ukf.languageEN,

							descriptionUA: ukf.descriptionUA,

							descriptionEN: ukf.descriptionEN,
						} as IUkfItem)
				),
	})

	return queryData
}
