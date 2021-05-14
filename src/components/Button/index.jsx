import cx from 'classnames'
import Loading from 'components/Loading'
import styles from './styles.module.scss'

const Button = ({action, label, children, disabled, loading, ...args}) => {
  const buttonClass = cx(styles.button, {
    [styles.disabled]: disabled,
  })

  return (
    <button
      className={buttonClass}
      {...{...args, disabled}}
      onClick={!disabled ? action : undefined}
    >
      {loading ? <Loading /> : label || children}
    </button>
  )
}

export default Button
