import { useLocation } from 'react-router-dom'
import './Header.scss'
import classNames from 'classnames'
import { NavigationLink } from '@/components/ui/NavigationLink'
import { Logo } from '@/components/ui/Logo'
import { HeaderButton } from '@/components/ui/HeaderButton'

const Header = () => {
  const links = [
    { title: 'Profile', isLogo: false, path: '/profile', icon: 'person' },
    { title: 'О НАС', isLogo: false, path: '/about', icon: '' },
    { title: 'КАТАЛОГ', isLogo: false, path: '/catalog', icon: '' },
    { title: 'Главная страница', isLogo: true, path: '/', icon: '' },
    { title: 'УСЛУГИ', isLogo: false, path: '/services', icon: '' },
    { title: 'КОНТАКТЫ', isLogo: false, path: '/contacts', icon: '' },
    {
      title: 'Cart',
      isLogo: false,
      path: '/cart',
      icon: 'cart',
      itemsCount: '',
    },
  ]

  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <header className={classNames('header', isHomePage ? 'header-home' : '')}>
      <div className='header__inner'>
        <div className='header__body'>
          <nav className='header__menu'>
            <ul className='header__menu-list'>
              {links.map(({ title, isLogo, path, icon, itemsCount }, index) => (
                <li className='header__menu-item' key={index}>
                  {isLogo && (
                    <Logo
                      title={title}
                      loading='eager'
                      className='header__logo'
                    />
                  )}
                  {!isLogo && !icon && (
                    <NavigationLink
                      title={title.toLowerCase()}
                      to={path}
                      className='header__menu-link header__link'
                    >
                      {title}
                    </NavigationLink>
                  )}
                  {icon && (
                    <HeaderButton
                      title={title}
                      to={path}
                      className='header__menu-link'
                      icon={icon}
                      itemsCount={itemsCount}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { Header }
