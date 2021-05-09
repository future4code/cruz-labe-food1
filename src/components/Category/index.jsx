import styles from './styles.module.scss'

const Category = ({categorys, register}) => {
  return (
    <div className={styles.container}>
      {categorys.length &&
        categorys?.map(category => (
          <span {...register('category', 'onClick')}>{category}</span>
        ))}
    </div>
  )
}

export default Category
