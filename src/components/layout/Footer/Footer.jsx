import './Footer.scss'
import { Logo } from '@/components/ui/Logo'
import { NavigationLink } from '@/components/ui/NavigationLink'

const Footer = () => {
  const links = [
    { title: 'О НАС', isLogo: false, path: '/about' },
    { title: 'КАТАЛОГ', isLogo: false, path: '/catalog' },
    { title: 'УСЛУГИ', isLogo: false, path: '/services' },
    { title: 'КОНТАКТЫ', isLogo: false, path: '/contacts' },
  ]

  return (
    <div className='footer'>
      <div className='footer__inner inner container'>
        <nav className='footer__menu'>
          <ul className='footer__menu-list'>
            <li className='footer__menu-item'>
              <Logo
                title='Главная страница'
                loading='eager'
                className='footer__logo'
                isLight
              />
            </li>
            {links.map(({ title, path }, index) => (
              <li className='footer__menu-item' key={index}>
                <NavigationLink
                  title={title.toLowerCase()}
                  to={path}
                  className='footer__menu-link footer__link'
                >
                  {title}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='footer__grid'>
          <div className='footer__body'>
            <form className='footer__form'>
              <h6 className='footer__form-title'>
                Я ХОЧУ ПОЛУЧАТЬ СООБЩЕНИЯ О НОВЫХ ПОСТУПЛЕНИЯХ
              </h6>
              <div className='footer__form-items'>
                <input
                  type='email'
                  className='footer__form-field'
                  placeholder='ВВЕДИТЕ СВОЙ E-MAIL'
                />
                <button type='submit' className='footer__form-submit'>
                  ОТПРАВИТЬ
                </button>
              </div>
            </form>
            <div className='footer__body-links'>
              <a href='/'>
                СОГЛАСИЕ НА ОБРАБОТКУ ДАННЫХ
              </a>
              <a href='/'>
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
              </a>
            </div>
            <div className='footer__body-info'>
              <div className='footer__body-schedule'>
                ГРАФИК РАБОТЫ:
                <br />
                БУДНИЕ ДНИ С 08:00 ДО 22:00
                <br />
                ВЫХОДНЫЕ ДНИ С 08:00 ДО 18:00
                <br />
              </div>
              <div className='footer__body-numbers'>
                +7 (495) 445-01-06
                <br />
                +7 (928) 359-51-38
              </div>
              <div className='footer__body-address'>
                АДРЕС:
                <br />
                117405, Г.МОСКВА, УЛ. КИРПИЧНЫЕ ВЫЕМКИ, Д. 2, КОРПУС 1, ПОМ.
                XII, ОФ. 408
              </div>
            </div>
          </div>
          <div className='footer__extra'>
            <span>Email: <a href='mailto:zakaz@erziaqua.ru' >zakaz@erziaqua.ru</a></span>
            <span>
              2025 ООО «Торговый Дом «Эрзи» ИНН 7725333472/ КПП 772401001 ОГРН
              1167746906898
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
