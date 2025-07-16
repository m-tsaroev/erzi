import classNames from 'classnames'
import './FilterChip.scss'

const FilterChip = (props) => {
  const { title, isChecked, onClick } = props

  return (
    <button
      type='button'
      className={classNames('filter-chip__button', {
        'is-checked': isChecked,
      })}
      aria-pressed={isChecked}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export { FilterChip }
