import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { ROUTES } from '@/config/routes'
import { PATHS } from '@/config/paths'
import { PrivateRoute } from './PrivateRoute'
import { Product } from '@/pages/Product'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {ROUTES.map(({ path, element }) => {
            return (
              path !== PATHS.PROFILE && path !== PATHS.CART && (
                <Route key={path} path={path} element={element} />
              )
            )
          })}
          <Route element={<PrivateRoute />}>
            {ROUTES.map(({ path, element }) => {
              return (
                (path === PATHS.PROFILE || path === PATHS.CART) && (
                  <Route key={path} path={path} element={element} />
                )
              )
            })}
          </Route>
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
