export const useScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
	e.preventDefault() // Предотвращаем стандартное действие ссылки

	const sectionId = e.currentTarget.getAttribute('data-section-id') // Получаем идентификатор секции из data-атрибута

	if (sectionId) {
		const sectionElement = document.getElementById(sectionId)

		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' }) // Выполняем плавную прокрутку
		}
	}
}
