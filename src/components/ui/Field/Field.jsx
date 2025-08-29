import './Field.scss'
import { useFormContext } from 'react-hook-form'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

const Field = (props) => {
  const {
    type,
    name,
    placeholder,
    className,
    autoComplete,
    isRequired,
    requiredText,
    requiredMessage,
    requiredRegex,
  } = props

  const { register, formState:{errors} } = useFormContext()

  const fieldError = errors[type]?.message

  const Component = type === 'textarea' ? type : 'input'

  return (
    <div className='field__item'>
      <Component
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={classNames('field', className, {
          'field--error': fieldError,
        })}
        {...register(
          type,
          {
            required: requiredText,
            pattern: {
              value: requiredRegex,
              message: requiredMessage,
            },
          }
        )}
      />
      {isRequired && (
        <AnimatePresence>
          {fieldError && (
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='field__required-message'
            >
              <p
                style={{
                  color: 'red',
                }}
              >
                {fieldError}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

export { Field }
