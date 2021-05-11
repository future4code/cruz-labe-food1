import cx from 'classnames'
import styles from './styles.module.scss'

const Button = ({action, label, children, disabled, ...args}) => {
  const buttonClass = cx(styles.button, {[styles.disabled]: disabled})

  return (
    <button
      className={buttonClass}
      {...{...args, disabled}}
      onClick={!disabled ? action : undefined}
    >
      {label || children}
    </button>
  )
}

export default Button
