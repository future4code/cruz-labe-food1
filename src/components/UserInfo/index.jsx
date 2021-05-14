import {useGo} from 'hooks/useGo'
import styles from './styles.module.scss'

const UserInfo = user => {
  const go = useGo()

  return (
    <div className={styles.container}>
      {user.name ? (
        <div className={styles.infoContainer}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.cpf}</p>
          <img
            className={styles.icon}
            src='icons/edit.svg'
            alt='Desenha de uma lápis para edição'
            onClick={() => go.editInfo(user)}
          />
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  )
}

export default UserInfo
