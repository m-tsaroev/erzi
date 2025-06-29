import { useLocation } from 'react-router-dom'
import './Header.scss'
import classNames from 'classnames'
import { NavigationLink } from '@/components/ui/NavigationLink'
import { Logo } from '@/components/ui/Logo'
import { CartButton } from '@/components/ui/CartButton'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdmin } from '@/hooks/useIsAdmin'
import { useEffect } from 'react'

const Header = () => {
  const links = [
    { title: 'УСЛУГИ', isLogo: false, path: '/services' },
    { title: 'КАТАЛОГ', isLogo: false, path: '/catalog' },
    { title: 'Главная страница', isLogo: true, path: '/' },
    { title: 'О КОМПАНИИ', isLogo: false, path: '/about' },
    { title: 'КОНТАКТЫ', isLogo: false, path: '/contacts' },
  ]

  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isCartPage = location.pathname === '/cart'

  const { user, setUser } = useAuth()

  // ↓↓↓↓ для проверки разкомментируйте 28-30 ↓↓↓↓

  useEffect(() => {
    setUser({ name: 'lala', role: 'admin' })
  }, [setUser])

  const { isAdmin } = useIsAdmin()

  return (
    <header className={classNames('header', isHomePage ? 'header-home' : '')}>
      <div className='header__inner'>
        <div className='header__body'>
          {isAdmin && (
            <NavigationLink
              title='product-list'
              to='/product-list'
              className='header__link header__body-link'
            >
              СПИСОК ТОВАРОВ
            </NavigationLink>
          )}
          <nav className='header__menu container'>
            <ul className='header__menu-list'>
              {links.map(({ title, isLogo, path }, index) => (
                <li className='header__menu-item' key={index}>
                  {isLogo ? (
                    <Logo
                      title={title}
                      loading='eager'
                      className='header__logo'
                    />
                  ) : (
                    <NavigationLink
                      title={title.toLowerCase()}
                      to={path}
                      className='header__menu-link header__link'
                    >
                      {title}
                    </NavigationLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {!isCartPage && (
            <NavigationLink
              title='cart-button'
              to={user ? '/cart' : '/login'}
              className='header__cart-button__link cart-button__link header__body-link'
            >
              <CartButton className='header__cart-button' />
            </NavigationLink>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header }
