import {createContext, useState} from 'react'

const defaultValues = {
  isLogged: false,
  user: {},
  login: () => {},
  logout: () => {},
}

export const AuthContext = createContext(defaultValues)

export const AuthProvider = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setUser(false)
    setIsLogged(false)
  }

  const login = user => {
    setUser(user || true)
    setIsLogged(true)
  }

  return {user, isLogged, login, logout}
}
