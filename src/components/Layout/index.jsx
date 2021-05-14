import {useProtectedPage} from 'hooks'
import BottomTabNav from 'components/BottomTabNav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {ThemeContext} from 'contexts/theme'
import {useContext, useState} from 'react'
import {useHistory, useLocation, useRouteMatch} from 'react-router-dom'
import styles from './styles.module.scss'
import {name} from 'constants/project'
import SplashScreen from 'components/SplashScreen'

const Layout = ({children}) => {
  useProtectedPage()
  const theme = useContext(ThemeContext)
  const {pathname, state} = useLocation()
  const {action} = useHistory()
  const page = pathname.replace(/\/|\d+/g, '')
  const [showLogo, showArrow, showBottom] = [true, true, true]
  const home = {title: name, showBottom}
  const [loading, setLoading] = useState(true)

  const settings = {
    login: {title: 'Entrar', showLogo},
    signup: {title: 'Cadastrar', showLogo, showArrow},
    address: {title: 'Meu endereço', showArrow},
    busca: {title: 'Busca', showArrow},
    restaurant: {title: 'Restaurante', showArrow},
    cart: {title: 'Meu carrinho', showBottom},
    profile: {title: 'Meu Perfil', showBottom},
    editinfo: {title: 'Editar', showArrow},
    editaddress: {title: 'Endereço', showArrow},
    notfound: {title: 'Vish...', showLogo},
  }
  const options = page ? settings[page] || settings.notfound : home

  return loading ? (
    <SplashScreen {...{setLoading}} />
  ) : (
    <div className={styles.container}>
      {page !== 'error' && <Header {...options} />}
      {children}
      {theme.width < 600 ? options?.showBottom && <BottomTabNav /> : <Footer />}
    </div>
  )
}

export default Layout
