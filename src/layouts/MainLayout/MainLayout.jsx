import { useLocation } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ModalWindow } from '@/components/ui/ModalWindow'
import Message from '@/components/ui/Message'
import { Form } from '@/components/ui/Form'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { PATHS } from '@/config/paths'

const MainLayout = () => {
  const location = useLocation()

  const isHomePage = location.pathname === PATHS.HOME

  const isLoginModalOpened = useSelector((state) => state.ui.isLoginModalOpen)
  const isErrorMessageShow = useSelector((state) => state.ui.isErrorShow)
  const isSuccessMessageShow = useSelector((state) => state.ui.isSuccessShow)
  const authError = useSelector((state) => state.auth.error)
  const cartError = useSelector((state) => state.cart.error)
  const errorMessage = authError || cartError
  const successMessage = useSelector((state) => state.ui.messageText)

  useEffect(() => {
    document.body.classList.toggle('home', isHomePage)
  }, [isHomePage])

  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    in: { opacity: 1, y: 0, },
    out: { opacity: 0, y: 20 },
  }
  const pageTransition = { duration: 0.2, ease: 'easeInOut' }

  return (
    <>
      <Header />
      <main className='content'>
        <AnimatePresence mode='wait'>
          {/* каждый переход даёт новый ключ = location.pathname */}
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial='initial'
            animate='in'
            // exit='out'
            transition={pageTransition}
          >
            {/* Тут будут все ваши страницы */}
            <Outlet />
          </motion.div>
        </AnimatePresence>
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
