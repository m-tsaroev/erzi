import classNames from 'classnames'
import './Form.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  closeLoginModal,
  hideErrorMessage,
  hideSuccessMessage,
  showErrorMessage,
  showSuccessMessage,
} from '@/store/slices/uiSlice'
import { login } from '@/store/slices/authSlice'
import { Logo } from '../Logo'
import { AnimatePresence, motion } from 'framer-motion'

const Form = (props) => {
  const { isRegistration } = props

  const [isRegistrationFrom, setIsRegistrationFrom] = useState(isRegistration)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const dispatch = useDispatch()

  const emailFieldError = formState.errors['email']?.message
  const passwordFieldError = formState.errors['password']?.message

  const onRegButtonClick = () => {
    setIsRegistrationFrom(true)
  }

  const onFormSubmit = async (data) => {
    const resultAction = await dispatch(login(data))
    if (login.fulfilled.match(resultAction)) {
      dispatch(showSuccessMessage())
      dispatch(closeLoginModal())
      setTimeout(() => {
        dispatch(hideSuccessMessage())
      }, 2000)
    } else {
      dispatch(showErrorMessage())
      setTimeout(() => {
        dispatch(hideErrorMessage())
      }, 2000)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
      <Logo className='form__logo' />
      <h3 className='form__title'>
        {isRegistrationFrom ? 'Создание аккаунта' : 'Добро пожаловать!'}
      </h3>
      <div className='form__fields'>
        <input
          type='email'
          name='email'
          autoComplete='current-email'
          placeholder='Email'
          className={classNames('form__field', {
            'form__field--error': emailFieldError,
          })}
          {...register('email', {
            required: 'Не валидный Email',
            pattern: {
              value: /^.{6,}$/,
              message: 'Не валидный Email',
            },
          })}
        />
        {emailFieldError && (
          <p
            style={{
              color: 'red',
            }}
          >
            {emailFieldError}
          </p>
        )}
        <input
          type='password'
          name='password'
          autoComplete='current-password'
          placeholder='Пароль'
          className={classNames('form__field', {
            'form__field--error': passwordFieldError,
          })}
          {...register('password', {
            required: 'Не валидный Пароль',
            pattern: {
              value: /^.{6,}$/,
              message: 'Символов должно быть не меньше 6',
            },
          })}
        />
        <AnimatePresence>
          {passwordFieldError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='form__field__required-message'
            >
              <p
                style={{
                  color: 'red',
                }}
              >
                {passwordFieldError}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        type='submit'
        className={classNames('form__submit form__button', {
          'is-log-in': !isRegistrationFrom,
        })}
      >
        {isRegistrationFrom ? 'Регистрация' : 'Вход'}
      </button>
      {!isRegistrationFrom && (
        <button type='button' className='form__button' onClick={onRegButtonClick}>Регистрация</button>
      )}
    </form>
  )
}

export { Form }
