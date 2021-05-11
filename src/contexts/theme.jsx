import {createContext, useEffect, useState} from 'react'

export const ThemeContext = createContext()

const getScreen = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
})

export const ThemeProvider = ({children}) => {
  const [headerOptions, setHeaderOptions] = useState({})
  const [screen, setScreen] = useState(getScreen())
  const watchResize = () => {
    setScreen(getScreen())
  }

  useEffect(() => {
    window.addEventListener('resize', watchResize)
    return () => {
      window.removeEventListener('resize', watchResize)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{headerOptions, setHeaderOptions, ...screen}}>
      {children}
    </ThemeContext.Provider>
  )
}
