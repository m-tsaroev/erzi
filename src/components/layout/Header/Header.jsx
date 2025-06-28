import { useLocation } from 'react-router-dom'
import './Header.scss'
import classNames from 'classnames'
import { NavigationLink } from '@/components/ui/NavigationLink'
import { Logo } from '@/components/ui/Logo'
import { CartButton} from '@/components/ui/CartButton'

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

  return (
    <header className={classNames('header', isHomePage ? 'header-home' : '')}>
      <div className='header__inner'>
        <div className='header__body'>
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
                      className='header__menu-link'
                    >
                      {title}
                    </NavigationLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <NavigationLink title="cart-button" to="/cart" className="header__cart-button__link cart-button__link">
            <CartButton className="header__cart-button" itemsCount={3} />
          </NavigationLink>
        </div>
      </div>
    </header>
  )
}

export { Header }
