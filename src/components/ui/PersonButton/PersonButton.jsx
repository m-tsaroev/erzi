import classNames from 'classnames'
import { NavigationLink } from '../NavigationLink'
import './PersonButton.scss'

const PersonButton = (props) => {
  const { title, to, className } = props

  const personSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} fill='none'>
      <path
        fill='#fff'
        d='M18.84 3.784C17.74 2.553 16.2 1.875 14.5 1.875c-1.708 0-3.253.674-4.35 1.897C9.04 5.01 8.5 6.69 8.627 8.505 8.88 12.087 11.513 15 14.5 15s5.616-2.913 5.872-6.493c.128-1.8-.415-3.477-1.531-4.723ZM24.469 28.125H4.53a1.707 1.707 0 0 1-.756-.166 1.764 1.764 0 0 1-.614-.486c-.369-.455-.517-1.077-.407-1.706.478-2.743 1.97-5.048 4.315-6.665 2.083-1.437 4.722-2.227 7.431-2.227 2.71 0 5.348.791 7.431 2.227 2.345 1.617 3.837 3.921 4.315 6.665.11.628-.038 1.25-.406 1.705a1.764 1.764 0 0 1-.615.487c-.237.113-.495.17-.756.166Z'
      />
    </svg>
  )

  return (
    <NavigationLink
      to={to}
      title={title}
      className={classNames('person__button', className)}
    >
      <div className='person__button-icon'>{personSvg}</div>
    </NavigationLink>
  )
}

export { PersonButton }
