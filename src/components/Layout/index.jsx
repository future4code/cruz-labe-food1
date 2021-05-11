import {useProtectedPage} from 'hooks'
import BottomTabNav from 'components/BottomTabNav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {ThemeContext} from 'contexts/theme'
import {useContext} from 'react'
import {useLocation} from 'react-router-dom'
import styles from './styles.module.scss'
import {name} from 'constants/project'

const Layout = ({children}) => {
  useProtectedPage()
  const theme = useContext(ThemeContext)
  const {pathname} = useLocation()
  const page = pathname.replace(/\/|\d+/g, '')
  const [showLogo, showArrow, showBottom] = [true, true, true]
  const home = {title: name, showBottom}

  console.log('CHEGOU AQUI!')

  const settings = {
    login: {title: 'Entrar', showLogo},
    signup: {title: 'Cadastrar', showLogo, showArrow},
    address: {title: 'Meu endereço', showArrow},
    busca: {title: 'Busca', showArrow},
    restaurant: {title: 'Restaurante', showArrow},
    cart: {title: 'Meu carrinho', showBottom},
    profile: {title: 'Meu Perfil', showBottom},
    editinfo: {title: 'Editar'},
    editaddress: {title: 'Endereço'},
    notfound: {title: 'Vish...', showLogo},
  }
  const options = page ? settings[page] || settings.notfound : home

  return (
    <div className={styles.container}>
      {page !== 'error' && <Header {...options} />}
      {children}
      {theme.width < 600 ? options?.showBottom && <BottomTabNav /> : <Footer />}
    </div>
  )
}

export default Layout
