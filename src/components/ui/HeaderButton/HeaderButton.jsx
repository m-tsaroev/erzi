import classNames from 'classnames'
import InlineSVG from 'react-inlinesvg'
import './HeaderButton.scss'
import { NavigationLink } from '../NavigationLink'

const HeaderButton = (props) => {
  const { title, to, className, icon, itemsCount, onClick } = props

  const iconSvg = <InlineSVG src={`/${icon}.svg`} />

  return (
    <>
      {to === '/cart' ? (
        <button
          title={title}
          className={classNames('header__button', className)}
          onClick={onClick}
        >
          {itemsCount && (
            <span className='header__button__items-count'>{itemsCount}</span>
          )}
          <div className='header__button-icon'>{iconSvg}</div>
        </button>
      ) : (
        <NavigationLink
          to={to}
          title={title}
          className={classNames('header__button', className)}
          onClick={onClick}
        >
          <div className='header__button-icon'>{iconSvg}</div>
        </NavigationLink>
      )}
    </>
  )
}

export { HeaderButton }
