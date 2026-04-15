import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0) // Jumps instantly to the top
    }, [location.pathname]) // Dependency array: runs whenever the path changes

    return children
}

export default ScrollToTop
