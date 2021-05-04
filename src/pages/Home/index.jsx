import Header from 'components/Header'
import styles from './styles.module.scss'
import {name} from 'constants/project'
const Home = () => {
  return (
    <div className={styles.container}>
      <Header title={name} />
    
      
      
    </div>
  )
}

export default Home