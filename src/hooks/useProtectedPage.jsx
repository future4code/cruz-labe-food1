import {AuthContext} from 'contexts/auth'
import {useContext} from 'react'
import {useLocation} from 'react-router-dom'
import {useGo} from '.'

export const useProtectedPage = () => {
  const {pathname} = useLocation()
  const go = useGo()
  const auth = useContext(AuthContext)

  if (
    pathname !== '/login' &&
    pathname !== '/signup' &&
    !localStorage.getItem('token')
  ) {
    go.login()
  } else {
    auth.login(true)
  }
}
