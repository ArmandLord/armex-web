import {useState, useEffect} from 'react'

export default function useScreenSize() {
	const [screenSize, setScreenSize] = useState('')

	const setSize = (width: number) => {
		if (width <= 360) {
			return 's'
		} else if (width <= 820) {
			return 'm'
		} else {
			return 'l'
		}
	}

	useEffect(() => {
		function handleResize() {
			let width = window.innerWidth
			let size = setSize(width)
			setScreenSize(size)
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return screenSize
}
