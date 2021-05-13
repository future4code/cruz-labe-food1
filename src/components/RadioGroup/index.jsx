import styles from './styles.module.scss'

const RadioGroup = ({value, change, options}) => (
  <div className={styles.container}>
    {options.map(option => (
      <div className={styles.radioItem}>
        <input
          type='radio'
          name={option.value}
          value={option.value}
          onChange={e => change(e.target.value)}
          checked={option?.checked}
        />
        <label for={option.value}>{option.label}</label>
      </div>
    ))}
  </div>
)

export default RadioGroup
