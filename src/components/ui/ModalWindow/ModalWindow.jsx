import { motion } from 'framer-motion'
import './ModalWindow.scss'

const ModalWindow = (props) => {
  const { children } = props

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='modal-overlay'
      >
        {children}
      </motion.div>
  )
}

export { ModalWindow }
