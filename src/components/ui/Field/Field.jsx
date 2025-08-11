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
    onChange,
    symbolCount,
    maxSymbolCount,
  } = props

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const {
    ref,
    onChange: rhfOnChange,
    name: rhfName,
    ...rest
  } = register(name, {
    required: requiredText,
    pattern: requiredRegex
      ? { value: requiredRegex, message: requiredMessage }
      : undefined,
  })

  const fieldError = errors[type]?.message

  const isTextarea = type === 'textarea'

  const Component = isTextarea ? type : 'input'

  return (
    <div className='field__item'>
      <Component
        {...rest}
        ref={ref}
        name={rhfName}
        {...(!isTextarea ? { type } : {})}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={classNames('field', className, {
          'field--error': fieldError,
        })}
        maxLength={maxSymbolCount}
        onChange={(e) => {
          rhfOnChange(e)
          onChange?.(e)
        }}
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
      {maxSymbolCount && (
        <div className='textarea-max-symbol-count'>
          {symbolCount}/{maxSymbolCount}
        </div>
      )}
    </div>
  )
}

export { Field }
