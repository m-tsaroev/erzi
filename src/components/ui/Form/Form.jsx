import classNames from 'classnames'
import './Form.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  addMessageText,
  closeLoginModal,
  hideErrorMessage,
  hideSuccessMessage,
  showErrorMessage,
  showSuccessMessage,
} from '@/store/slices/uiSlice'
import { login, registration } from '@/store/slices/authSlice'
import { Logo } from '../Logo'
import { AnimatePresence, motion } from 'framer-motion'

const Form = (props) => {
  const { isRegistration } = props

  const [isRegistrationForm, setisRegistrationForm] = useState(isRegistration)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const dispatch = useDispatch()

  const emailFieldError = formState.errors['email']?.message
  const passwordFieldError = formState.errors['password']?.message
  const userNameFieldError = formState.errors['username']?.message

  const onRegButtonClick = () => {
    setisRegistrationForm(true)
  }

  const onFormLoginSubmit = async (data) => {
    const resultAction = await dispatch(login(data))

    if (login.fulfilled.match(resultAction)) {
      dispatch(addMessageText('Вы авторизованы'))
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

  const onFormRegistrationSubmit = async (data) => {
    const resultAction = await dispatch(registration(data))

    if (registration.fulfilled.match(resultAction)) {
      dispatch(addMessageText('Вы зарегестрированы'))
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
    <form
      className='form'
      onSubmit={handleSubmit(
        isRegistrationForm ? onFormRegistrationSubmit : onFormLoginSubmit
      )}
    >
      <Logo className='form__logo' />
      <h3 className='form__title'>
        {isRegistrationForm ? 'Создание аккаунта' : 'Добро пожаловать!'}
      </h3>
      {isRegistrationForm ? (
        
        <div className='form__fields'>
          <div className='field'>
            <input
              type='username'
              name='username'
              autoComplete='current-email'
              placeholder='Username'
              className={classNames('form__field', {
                'form__field--error': userNameFieldError,
              })}
              {...register('username', {
                required: 'Не валидный username',
                pattern: {
                  value: /^.{3,30}$/,
                  message: 'Ведите от 3 до 30 символов',
                },
              })}
            />
            <AnimatePresence>
              {userNameFieldError && (
                <motion.div
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='form__field__required-message'
                >
                  <p
                    style={{
                      color: 'red',
                    }}
                  >
                    {userNameFieldError}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='field'>
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
            <AnimatePresence>
              {emailFieldError && (
                <motion.div
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='form__field__required-message'
                >
                  <p
                    style={{
                      color: 'red',
                    }}
                  >
                    {emailFieldError}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='field'>
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
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
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
        </div>
      ) : (
        <div className='form__fields'>
          <div className='field'>
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
            <AnimatePresence>
              {emailFieldError && (
                <motion.div
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='form__field__required-message'
                >
                  <p
                    style={{
                      color: 'red',
                    }}
                  >
                    {emailFieldError}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='field'>
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
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
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
        </div>
      )}

      <button type='submit' className={classNames('form__submit form__button')}>
        {isRegistrationForm ? 'Зарегестрироваться' : 'Вход'}
      </button>
      {!isRegistrationForm && (
        <button
          type='button'
          className='form__button'
          onClick={onRegButtonClick}
        >
          Регистрация
        </button>
      )}
    </form>
  )
}

export { Form }
