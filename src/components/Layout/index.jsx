import BottomTabNav from 'components/BottomTabNav'
import Footer from 'components/Footer'
import Header from 'components/Header'
import {ThemeContext} from 'contexts/theme'
import {useContext, useState} from 'react'
import styles from './styles.module.scss'

const Layout = ({children}) => {
  const theme = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <Header {...theme} />
      {children}
      {theme.width < 600 ? <BottomTabNav /> : <Footer />}
    </div>
  )
}

export default Layout
