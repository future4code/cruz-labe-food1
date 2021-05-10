import styles from './styles.module.scss'

const Error = ({error}) => {
  console.log(error)
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Algo de <strong>certo</strong>está <strong>errado</strong>errado...
      </h3>
    </div>
  )
}

export default Error
