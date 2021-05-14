import styles from './styles.module.scss'
import {NavLink} from 'react-router-dom'

const BottomTabNav = () => (
  <div className={styles.container}>
    <NavLink
      to='/'
      exact
      className={styles.home}
      activeClassName={styles.activeHome}
    />
    <NavLink
      to='/cart'
      className={styles.cart}
      activeClassName={styles.activeCart}
    />
    <NavLink
      to='/profile'
      className={styles.avatar}
      activeClassName={styles.activeAvatar}
    />
  </div>
)

export default BottomTabNav
