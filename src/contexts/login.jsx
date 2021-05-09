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
  const [user, setUser] = useState({})

  const logout = () => {
    localStorage.removeItem('token')
    setUser({})
    setIsLogged(false)
  }

  const login = user => {
    setUser(user)
    setIsLogged(true)
  }

  return {user, isLogged, login, logout}
}
