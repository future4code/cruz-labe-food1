import styles from './styles.module.scss'
import classNames from 'classnames'

const Input = ({
  label,
  name,
  img,
  showPassword,
  optional,
  error,
  success,
  warning,
  ...args
}) => {
  const inputClass = classNames(styles.input, {
    [styles.error]: error,
    [styles.success]: success,
  })
  return (
    <div className={styles.rectangle}>
      <label className={styles.label} htmlFor={name}>
        {label && label}
      </label>

      <input
        className={inputClass}
        id={name}
        name={name}
        required={!optional}
        {...args}
      />
      {warning && error && <span className={styles.helper}>{warning}</span>}

      {img && (
        <img
          onClick={showPassword}
          className={styles.img}
          src={img}
          alt={name}
        />
      )}
    </div>
  )
}

export default Input
