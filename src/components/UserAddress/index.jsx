import {useGo} from 'hooks/useGo'
import styles from './styles.module.scss'

const UserAddress = ({address, title}) => {
  const go = useGo()
  return (
    <div className={styles.container}>
      <p className={styles.title}> {title}</p>
      <p>{address}</p>
      <img
        className={styles.icon}
        src='/icons/edit.svg'
        alt='Desenha de um lápis para edição'
        onClick={go.editAddress}
      />
    </div>
  )
}

export default UserAddress
