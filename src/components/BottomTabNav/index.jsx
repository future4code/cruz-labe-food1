import styles from './styles.module.scss'
import {useGo} from 'hooks/useGo'

const BottomTabNav = () => {
  const go = useGo()

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <button className={styles.home} onClick={go.home}></button>
        <button className={styles.cart} onClick={go.cart}></button>
        <button className={styles.avatar} onClick={go.profile}></button>
      </div>
    </div>
  )
}

export default BottomTabNav
