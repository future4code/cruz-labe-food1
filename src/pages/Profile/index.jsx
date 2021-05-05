import styles from './styles.module.scss'
import BottomTabNav from "components/BottomTabNav";

const Profile = () => {
  return (
    <div>
      <h1 className={styles.title}>Profile page</h1>
      <BottomTabNav />
    </div>
  )
}

export default Profile