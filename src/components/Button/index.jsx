import styles from './styles.module.scss'

const Button = ({action, label, children}) => {
  return (
    <button className={styles.button} onClick={action}>
      {label || children}
    </button>
  )
}

export default Button
