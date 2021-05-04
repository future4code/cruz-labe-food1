import styles from './styles.module.scss'

const Header = ({title, showArrow, showLogo}) => {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
    </header>

  )
}

export default Header