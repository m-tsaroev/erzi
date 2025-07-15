import { AnimatePresence, motion } from 'framer-motion'
import './Message.scss'
import classNames from 'classnames'
import { memo } from 'react'

const Message = (props) => {
  const { 
    show, 
    message, 
    /**
     * 'success' | 'error'
     */
    mode,
  } = props

  return (
    <AnimatePresence>
      {show && (
          <motion.div
            initial={{y: -100}}
            animate={{y: 0}}
            exit={{y: -100}}
            transition={{ duration: 0.2 }}
            className={classNames('message', mode)}
          >
            {message}
          </motion.div>
        )}
    </AnimatePresence>
  )
}

export default memo(Message)
