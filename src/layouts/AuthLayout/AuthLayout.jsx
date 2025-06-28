import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='content'>
      <Outlet />
    </main>
  )
}

export { AuthLayout }
