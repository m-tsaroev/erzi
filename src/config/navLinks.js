import { PATHS } from './paths'

const links = [
  { title: 'Profile', isLogo: false, path: PATHS.PROFILE, icon: 'person' },
  { title: 'О НАС', isLogo: false, path: PATHS.ABOUT, icon: null },
  { title: 'КАТАЛОГ', isLogo: false, path: PATHS.CATALOG, icon: null },
  { title: 'Главная страница', isLogo: true, path: PATHS.HOME, icon: null },
  { title: 'УСЛУГИ', isLogo: false, path: PATHS.SERVICES, icon: null },
  { title: 'КОНТАКТЫ', isLogo: false, path: PATHS.CONTACTS, icon: null },
  {
    title: 'Cart',
    isLogo: false,
    path: PATHS.CART,
    icon: 'cart',
    itemsCount: '',
  },
]

export { links }
