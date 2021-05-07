import {createContext, useState} from 'react'

defaultValues = {
  isLogged: false,
  user: {},
  logout: () => {},
}

export const LoginContext = createContext(defaultValues)

export const LoginProvider = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState({})

  const logout = () => {
    localStorage.removeItem('token')
    setUser({})
    setIsLogged(false)
  }

  // const login
}
