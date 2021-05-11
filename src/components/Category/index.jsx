import {useRef, useState} from 'react'
import styles from './styles.module.scss'

const Category = ({categorys, register, resetCategory}) => {
  const [swipe, setSwipe] = useState({})
  const categoryRef = useRef(0)

  const addPixel = (value, add) => Number(value.replace('px', '')) + add + 'px'
  const getPixel = value => Number(value.replace('px', ''))

  const handleSwipe = e => {
    const {type} = e
    const x = e?.touches?.[0]?.pageX
    if (type === 'touchstart') setSwipe({...swipe, start: x})

    if (type === 'touchmove') {
      let moved = x - swipe.start
      let value = categoryRef.current.style.marginLeft || '0'
      let margin = getPixel(value)

      if (margin < -400 && margin < 0) return

      if (margin <= 0 && margin >= -400) {
        let move = margin + moved
        if (margin + moved < -400) move = -400
        if (margin + moved > 0) move = 0
        categoryRef.current.style.marginLeft = move + 'px'
        setSwipe({...swipe, move})
      }
    }
    if (type === 'touchend') {
      setSwipe({...swipe, end: x})
    }
    // if (type !== 'onmousemove') console.log({e})
  }

  return (
    <div
      className={styles.container}
      ref={categoryRef}
      onMouseDown={handleSwipe}
      onMouseUp={handleSwipe}
      onMouseMove={handleSwipe}
      onTouchStart={handleSwipe}
      onTouchEnd={handleSwipe}
      onTouchMove={handleSwipe}
    >
      <span key={'todos'} onClick={resetCategory}>
        Todos
      </span>
      {categorys.length &&
        categorys?.map(category => (
          <span key={category} {...register('category', {event: 'onClick'})}>
            {category}
          </span>
        ))}
    </div>
  )
}

export default Category
