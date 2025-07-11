import classNames from 'classnames'
import './FilterChip.scss'
import { useEffect, useRef } from 'react'

const FilterChip = (props) => {
  const { title, isChecked, onClick, onLoad } = props

  const buttonRef = useRef(null)

  useEffect(() => {
    if (typeof onLoad === 'function' && buttonRef.current) {
      onLoad({target: buttonRef.current})
    }
  }, [onLoad])

  return (
    <button
      type='button'
      className={classNames('filter-chip__button', {
        'is-checked': isChecked,
      })}
      aria-pressed={isChecked}
      onClick={onClick}
      onLoad={onLoad}
      ref={buttonRef}
    >
      {title}
    </button>
  )
}

export { FilterChip }
