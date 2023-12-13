export const API_URL = `${process.env.APP_URL}/api`

export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getGenresUrl = (string: string) => `/genres${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getReviewsUrl = (string: string) => `/reviews${string}`

export const getUkfsUrl = (string: string) => `/ukfs${string}`
export const getFpvaiUrl = (string: string) => `/fpvai${string}`
export const getFssUrl = (string: string) => `/fss${string}`
export const getPfUrl = (string: string) => `/pf${string}`
