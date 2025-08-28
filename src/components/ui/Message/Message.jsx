import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'
import './Message.scss'

const Message = (props) => {
  const {
    show,
    message,
    /**
     * 'success' | 'error'
     */
    mode,
    duration,
  } = props

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.2 }}
          className={classNames('message', mode)}
        >
          {message}
          {duration && (
            <div
              style={{
                animationDuration: `${duration}ms`,
              }}
              className='progress-bar'
            ></div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default memo(Message)
