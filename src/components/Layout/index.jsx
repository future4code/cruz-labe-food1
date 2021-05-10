import BottomTabNav from 'components/BottomTabNav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {ThemeContext} from 'contexts/theme'
import {useContext} from 'react'
import {useLocation, useRouteMatch} from 'react-router-dom'
import styles from './styles.module.scss'
import {name} from 'constants/project'

const Layout = ({children}) => {
  const theme = useContext(ThemeContext)
  const {pathname} = useLocation()
  const page = pathname.replace(/\/|:\w+/g, '')
  const [showLogo, showArrow, showBottom] = [true, true, true]
  const home = {title: name}

  const settings = {
    login: {title: 'Entrar', showLogo},
    signup: {title: 'Cadastrar', showLogo, showArrow},
    address: {title: 'Meu endereço', showArrow},
    busca: {title: 'Busca', showArrow},
    restaurante: {title: 'Restaurante', showArrow},
    cart: {title: 'Meu carrinho', showBottom},
    profile: {title: 'Meu Perfil', showBottom},
    editinfo: {title: 'Editar'},
    editaddress: {title: 'Endereço'},
  }
  const options = page ? settings[page] : home

  return (
    <>
      <div className={styles.container}>
        <Header {...options} />
        {children}
        {theme.width < 600 ? (
          options?.showBottom && <BottomTabNav />
        ) : (
          <Footer />
        )}
      </div>
    </>
  )
}

export default Layout
