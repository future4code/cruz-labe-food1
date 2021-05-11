import styles from './styles.module.scss'
import Header from 'components/Header'
import food from 'assets/images/food-mess.png'

const Error = ({error}) => {
  console.log(error)
  return (
    <div className={styles.container}>
      <Header title='Ops...' showLogo />
      <h3 className={styles.title}>
        Algo de <strong>certo</strong> está <strong>errado</strong>...
      </h3>
      <img src={food} alt='Comidinha empilhada' />
      <p className={styles.description}>
        Desculpe, mas erros ocorrem, vamos tentar resolver o mais rápido
        possível!
      </p>
    </div>
  )
}

export default Error
