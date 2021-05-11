import {useLocation} from 'react-router-dom'
import {useGo} from '.'

export const useProtectedPage = () => {
  const {pathname} = useLocation()
  const go = useGo()

  if (
    pathname !== '/login' &&
    pathname !== '/signup' &&
    !localStorage.getItem('token')
  ) {
    console.log({pathname})
    console.log('VO SAIR')
    go.login()
  } else {
    console.log('DE BOAS')
  }
}
