import HeadProvider from '@/providers/HeadProvider'
import MainProvider from '@/providers/MainProvider'
import '@/styles/globals.scss'

import '@/styles/react-select.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import { PropsWithChildren } from 'react'
export type TypeComponentAuthFields = {} & PropsWithChildren

type TypeAppProps = AppProps & TypeComponentAuthFields

const App = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<HeadProvider>
			<MainProvider>
				<Component {...pageProps} />
			</MainProvider>
		</HeadProvider>
	)
}

export default appWithTranslation(App)
