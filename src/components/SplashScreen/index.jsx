import styles from './styles.module.scss'
import {ReactComponent as Logo} from 'assets/icons/logo.svg'

const SplashScreen = ({setLoadingLogo}) => {
  return (
    <div
      className={styles.container}
      onAnimationEnd={() => setLoadingLogo(false)}
    >
      <Logo className={styles.logo} />
    </div>
  )
}

export default SplashScreen
