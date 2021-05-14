import classNames from 'classnames'
import {useGo} from 'hooks/useGo'
import {useLocation, useParams, useRouteMatch} from 'react-router-dom'
import styles from './styles.module.scss'
import {VscColorMode} from 'react-icons/vsc'

const Header = ({title, showArrow, showLogo, bottom}) => {
  const go = useGo()
  const c = classNames

  const titleContainer = c(styles.titleContainer, {
    [styles.titleContainerBorder]: showArrow,
  })

  const headerSize = c(styles.container, {
    [styles.sizeTitle]: !showLogo,
    [styles.sizeLogo]: showLogo,
  })

  const changeTheme = () => {
    const root = document.documentElement
    const primary = getComputedStyle(root).getPropertyValue(
      '--background-primary'
    )
    if (primary.trim() === '#fff') {
      //change to dark mode
      root.style.setProperty('--background-primary', '#333')
      root.style.setProperty('--background-secondary', '#666')
      root.style.setProperty('--text-primary', '#fff')
      root.style.setProperty('--text-secondary', '#ddd')
      root.style.setProperty('--decoration', '#999')
    } else {
      //change to light mode
      root.style.setProperty('--background-primary', '#fff')
      root.style.setProperty('--background-secondary', '#eee')
      root.style.setProperty('--text-primary', '#000')
      root.style.setProperty('--text-secondary', '#b8b8b8')
      root.style.setProperty('--decoration', '#b8b8b8')
    }
  }

  return (
    <header className={headerSize}>
      <VscColorMode className={styles.colorToogle} onClick={changeTheme} />
      {/* <span className={styles.colorText}>Go Dark Mode</span> */}

      <div className={titleContainer}>
        {showArrow && (
          <img
            className={styles.arrowBack}
            src='/icons/back.svg'
            alt='Seta para voltar'
            onClick={go.back}
          />
        )}
        {!showLogo && !bottom && (
          <h1
            className={c(styles.title, {
              [styles.titleContainerBorder]: !showArrow,
            })}
          >
            {title}
          </h1>
        )}
      </div>

      {showLogo && (
        <>
          <img
            className={styles.logo}
            src='/icons/logo.svg'
            alt='Imagem com texto escrito Rappi4 com letras grandes'
          />
          <h1 className={styles.title}>{title}</h1>
        </>
      )}
      {bottom && <h1 className={c(styles.title, styles.margin)}>{title}</h1>}
    </header>
  )
}

export default Header
