import cx from 'classnames'
import {useState} from 'react'
import styles from './styles.module.scss'

const Alert = ({message, setIsError}) => {
  const [animation, setAnimation] = useState(false)

  const toogle = () => {
    if (!animation) return setAnimation(true)
    if (animation) setIsError(false)
  }

  return (
    <div
      className={cx(styles.container, {[styles.moveout]: animation})}
      onAnimationEnd={toogle}
    >
      {message}
    </div>
  )
}

export default Alert
