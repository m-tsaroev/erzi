import { motion } from 'framer-motion'
import './ModalWindow.scss'
import { useDispatch } from 'react-redux'
import { closeLoginModal } from '@/store/slices/uiSlice'

const ModalWindow = (props) => {
  const { children } = props
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(closeLoginModal())
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className='modal-overlay'
      onClick={closeModal}
    >
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='modal-content'
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export { ModalWindow }
