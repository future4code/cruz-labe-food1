import classNames from 'classnames'
import {useGo} from 'hooks/useGo'
import {useLocation, useParams, useRouteMatch} from 'react-router-dom'
import styles from './styles.module.scss'

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

  return (
    <header className={headerSize}>
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
