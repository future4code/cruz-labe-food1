import {createContext, useEffect, useState} from 'react'

export const ThemeContext = createContext()

const getScreen = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
})

export const ThemeProvider = ({children}) => {
  const [headerOptions, setHeaderOptions] = useState({})
  const [screen, setScreen] = useState(getScreen())

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreen(getScreen())
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return (
    <ThemeContext.Provider value={{headerOptions, setHeaderOptions, ...screen}}>
      {children}
    </ThemeContext.Provider>
  )
}
