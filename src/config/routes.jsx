import { Home } from '@/pages/Home'
import { PATHS } from './paths'
import { Services } from '@/pages/Services'
import { Catalog } from '@/pages/Catalog'
import { About } from '@/pages/About'
import { Contacts } from '@/pages/Contacts'
import { Cart } from '@/pages/Cart'
import { Profile } from '@/pages/Profile'

const ROUTES = [
  { path: PATHS.HOME, element: <Home /> },
  { path: PATHS.SERVICES, element: <Services /> },
  { path: PATHS.CATALOG, element: <Catalog /> },
  { path: PATHS.ABOUT, element: <About /> },
  { path: PATHS.CONTACTS, element: <Contacts /> },
  { path: PATHS.CART, element: <Cart /> },
  { path: PATHS.PROFILE, element: <Profile /> },
]

export { ROUTES }