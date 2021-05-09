import BottomTabNav from 'components/BottomTabNav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {ThemeContext} from 'contexts/theme'
import {useContext} from 'react'
import styles from './styles.module.scss'

const Layout = ({children}) => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={styles.container}>
        <Header {...theme.headerOptions} />
        {children}
      </div>
      {theme.width < 600 ? <BottomTabNav /> : <Footer />}
    </>
  )
}

export default Layout
