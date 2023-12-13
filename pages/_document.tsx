import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentProps,
} from 'next/document'
import i18nextConfig from '../next-i18next.config'
type Props = DocumentProps & {
	// add custom document props
}
class myDocument extends Document<Props> {
	render() {
		const currentLocale =
			this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
		return (
			<Html lang={currentLocale} className='scroll-smooth'>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default myDocument
