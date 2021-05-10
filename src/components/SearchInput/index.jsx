import styles from './styles.module.scss'

const SearchInput = ({name, img, ...args}) => {
  return (
    <div className={styles.rectangle}>
      <input className={styles.input} id={name} name={name} {...args} />

      {img && <img className={styles.img} src={img} alt={name} />}
    </div>
  )
}

export default SearchInput
