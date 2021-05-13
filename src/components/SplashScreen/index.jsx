import styles from './styles.module.scss'
import {ReactComponent as Logo} from 'assets/icons/logo.svg'
import {useGo} from 'hooks/useGo'
import Loading from 'components/Loading'

const SplashScreen = ({setLoading}) => (
  <div className={styles.container} onAnimationEnd={() => setLoading(false)}>
    <Logo className={styles.logo} />
    <Loading thick color='white' />
  </div>
)

export default SplashScreen
