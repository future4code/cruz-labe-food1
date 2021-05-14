import cx from 'classnames'
import styles from './styles.module.scss'

const Loading = ({color, thick, type}) => {
  const loadingClass = cx(styles.container, {
    [styles.thickBorder]: thick,
  })
  return <div className={loadingClass}></div>
}

export default Loading
