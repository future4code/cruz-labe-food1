import cx from 'classnames'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import styles from './styles.module.scss'

const Alert = ({message, setIsError, success, warning, countdown}) => {
  const [animation, setAnimation] = useState(false)
  const [count, setCount] = useState(countdown)
  const id = useRef()

  useEffect(() => {
    if (!count && countdown) return clearInterval(id.current)

    if (count === countdown) {
      id.current = setInterval(
        setCount(prev => (prev > 0 ? prev - 1 : 0)),
        1000
      )
    }
  }, [count, countdown])

  const toogle = () => {
    if (!animation) return setAnimation(true)
    if (animation && setIsError) setIsError(false)
  }

  const alertStyle = cx(styles.container, {
    [styles.moveout]: animation,
    [styles.success]: success,
    [styles.warning]: warning,
  })

  console.log({alertStyle})

  return (
    <div className={alertStyle} onAnimationEnd={toogle}>
      {message}
    </div>
  )
}

export default Alert
