import { useLocation } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ModalWindow } from '@/components/ui/ModalWindow'
import Message from '@/components/ui/Message'
import { Form } from '@/components/ui/Form'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { PATHS } from '@/config/paths'

const MainLayout = () => {
  const location = useLocation()

  const isHomePage = location.pathname === PATHS.HOME

  const isLoginModalOpened = useSelector((state) => state.ui.isLoginModalOpen)
  const isErrorMessageShow = useSelector((state) => state.ui.isErrorShow)
  const isSuccessMessageShow = useSelector((state) => state.ui.isSuccessShow)
  const errorMessage = useSelector((state) => state.auth.error)
  const successMessage = useSelector((state) => state.ui.messageText)

  useEffect(() => {
    document.body.classList.toggle('home', isHomePage)
  }, [isHomePage])

  return (
    <>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
      <AnimatePresence>
        {isLoginModalOpened && (
          <ModalWindow>
            <Form />
          </ModalWindow>
        )}
      </AnimatePresence>
      <Message
        show={isErrorMessageShow || isSuccessMessageShow}
        message={errorMessage ? errorMessage : successMessage}
        mode={isErrorMessageShow ? 'error' : 'success'}
      />
    </>
  )
}

export { MainLayout }
