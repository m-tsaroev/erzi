import { useLocation } from 'react-router-dom'
import './Header.scss'
import classNames from 'classnames'
import { NavigationLink } from '@/components/ui/NavigationLink'

const Header = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <header className={classNames('header', isHomePage ? 'header-home' : '')}>
      <div className='header__body'>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <NavigationLink
                className='header__nav-link'
                title='Корзина'
                to='/cart'
              >
                КОРЗИНА
              </NavigationLink>
            </li>
            <li className='header__nav-item'>
              <NavigationLink
                className='header__nav-link'
                title='Каталог'
                to='/cart'
              >
                КАТАЛОГ
              </NavigationLink>
            </li>
            <li className='header__nav-item'>
              <NavigationLink
                className='header__nav-link'
                title='Корзина'
                to='/cart'
              >
                КОРЗИНА
              </NavigationLink>
            </li>
            <li className='header__nav-item'>
              <NavigationLink
                className='header__nav-link'
                title='О компании'
                to='/cart'
              >
                О КОМПАНИИ
              </NavigationLink>
            </li>
            <li className='header__nav-item'>
              <NavigationLink
                className='header__nav-link'
                title='Корзина'
                to='/cart'
              >
                КОРЗИНА
              </NavigationLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }
