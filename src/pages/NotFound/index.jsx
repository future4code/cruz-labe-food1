import styles from './styles.module.scss'
import notFound from 'assets/images/not-found.png'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <span className={styles.error}>404</span>
      <img
        className={styles.image}
        src={notFound}
        alt='Imagem do ultimo pedaço de bolo no prato'
      />
      <h3 className={styles.title}>
        <strong>Não achei</strong> o que você queria,
        <strong>tente outra coisa</strong> amiguin
      </h3>
    </div>
  )
}

export default NotFound
