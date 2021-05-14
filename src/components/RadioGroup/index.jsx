import styles from './styles.module.scss'

const RadioGroup = ({name, value, change, options}) => (
  <div className={styles.container}>
    {options.map(option => (
      <div className={styles.radioItem}>
        <input
          type='radio'
          name={name}
          id={option.value}
          value={option.value}
          onChange={() => change(option.value)}
        />
        <span></span>
        <label for={option.value}>{option.label}</label>
      </div>
    ))}
  </div>
)

export default RadioGroup
