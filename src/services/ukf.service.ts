import { axiosClassic, instance } from '@/api/interceptors'
import {
	getFpvaiUrl,
	getFssUrl,
	getPfUrl,
	getUkfsUrl,
} from '@/config/api.config'

import { IUkfItem, IUkf } from '@/shared/types/ukfFF.types'

export interface IUkfEditInput extends Omit<IUkf, '_id'> {}

export const UkfService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IUkfItem[]>(getUkfsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return instance.get<IUkfEditInput>(getUkfsUrl(`/${_id}`))
	},
}

export const FpvaiService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IUkfItem[]>(getFpvaiUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return instance.get<IUkfEditInput>(getFpvaiUrl(`/${_id}`))
	},
}

export const FssService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IUkfItem[]>(getFssUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return instance.get<IUkfEditInput>(getFssUrl(`/${_id}`))
	},
}

export const PfService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IUkfItem[]>(getPfUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return instance.get<IUkfEditInput>(getPfUrl(`/${_id}`))
	},
}
