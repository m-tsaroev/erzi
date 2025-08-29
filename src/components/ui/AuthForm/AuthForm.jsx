import './AuthForm.scss'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
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
import { Form } from '../Form'
import { Field } from '../Field'
import { loginFields, registrationFields } from './authFields'
import { Button } from '../Button/Button'

const AuthForm = (props) => {
  const { isRegistration } = props

  const [isRegistrationForm, setIsRegistrationForm] = useState(isRegistration)
  const methods = useForm({ mode: 'onChange' })
  const { handleSubmit } = methods

  const dispatch = useDispatch()

  const onFormModeChangeButtonClick = () => {
    setIsRegistrationForm(!isRegistrationForm)
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
      setIsRegistrationForm(false)
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

  const onCloseButtonClick = () => {
    dispatch(closeLoginModal())
  }

  return (
    <FormProvider {...methods}>
      <Form
        isRegistrationForm={isRegistrationForm}
        onSubmit={handleSubmit(
          isRegistrationForm ? onFormRegistrationSubmit : onFormLoginSubmit
        )}
        className='auth'
      >
        <div className='auth__close-button' onClick={onCloseButtonClick}></div>

        <div className='auth__fields'>
          {isRegistrationForm
            ? registrationFields.map((registrationField, index) => (
                <Field {...registrationField} key={index} />
              ))
            : loginFields.map((loginField, index) => (
                <Field {...loginField} key={index} />
              ))}
        </div>

        <div className='auth__buttons'>
          <Button
            type='submit'
            className='auth__button'
            text={isRegistrationForm ? 'Зарегестрироваться' : 'Войти'}
            mode='blue'
          />
          <Button
            type='button'
            className='auth__button'
            text={isRegistrationForm ? 'Вход' : 'Регистрация'}
            onClick={onFormModeChangeButtonClick}
          />
        </div>
      </Form>
    </FormProvider>
  )
}

export { AuthForm }

// {isRegistrationForm ? (

//         <div className='form__fields'>
//           // 1
//           <div className='field'>
//             <input
//               type='username'
//               name='username'
//               autoComplete='current-email'
//               placeholder='Username'
//               className={classNames('form__field', {
//                 'form__field--error': userNameFieldError,
//               })}
//               {...register('username', {
//                 required: 'Не валидный username',
//                 pattern: {
//                   value: usernameRegex,
//                   message: 'Ведите от 3 до 30 символов. Имя может начинаться только от с букв, цифр, и знаков "_" "-"',
//                 },
//               })}
//             />
//             <AnimatePresence>
//               {userNameFieldError && (
//                 <motion.div
//                   initial={{ y: -5, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -5, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   className='form__field__required-message'
//                 >
//                   <p
//                     style={{
//                       color: 'red',
//                     }}
//                   >
//                     {userNameFieldError}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           <div className='field'>
//             <input
//               type='email'
//               name='email'
//               autoComplete='current-email'
//               placeholder='Email'
//               className={classNames('form__field', {
//                 'form__field--error': emailFieldError,
//               })}
//               {...register('email', {
//                 required: 'Не валидный Email',
//                 pattern: {
//                   value: emailRegex,
//                   message: 'Не валидный Email',
//                 },
//               })}
//             />
//             <AnimatePresence>
//               {emailFieldError && (
//                 <motion.div
//                   initial={{ y: -5, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -5, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   className='form__field__required-message'
//                 >
//                   <p
//                     style={{
//                       color: 'red',
//                     }}
//                   >
//                     {emailFieldError}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           <div className='field'>
//             <input
//               type='password'
//               name='password'
//               autoComplete='current-password'
//               placeholder='Пароль'
//               className={classNames('form__field', {
//                 'form__field--error': passwordFieldError,
//               })}
//               {...register('password', {
//                 required: 'Не валидный Пароль',
//                 pattern: {
//                   value: passwordRegex,
//                   message: 'Символов должно быть не меньше 6',
//                 },
//               })}
//             />
//             <AnimatePresence>
//               {passwordFieldError && (
//                 <motion.div
//                   initial={{ y: -5, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -5, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   className='form__field__required-message'
//                 >
//                   <p
//                     style={{
//                       color: 'red',
//                     }}
//                   >
//                     {passwordFieldError}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       ) : (
//         <div className='form__fields'>
//           <div className='field'>
//             <input
//               type='email'
//               name='email'
//               autoComplete='current-email'
//               placeholder='Email'
//               className={classNames('form__field', {
//                 'form__field--error': emailFieldError,
//               })}
//               {...register('email', {
//                 required: 'Не валидный Email',
//                 pattern: {
//                   value: emailRegex,
//                   message: 'Не валидный Email',
//                 },
//               })}
//             />
//             <AnimatePresence>
//               {emailFieldError && (
//                 <motion.div
//                   initial={{ y: -5, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -5, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   className='form__field__required-message'
//                 >
//                   <p
//                     style={{
//                       color: 'red',
//                     }}
//                   >
//                     {emailFieldError}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           <div className='field'>
//             <input
//               type='password'
//               name='password'
//               autoComplete='current-password'
//               placeholder='Пароль'
//               className={classNames('form__field', {
//                 'form__field--error': passwordFieldError,
//               })}
//               {...register('password', {
//                 required: 'Не валидный Пароль',
//                 pattern: {
//                   value: passwordRegex,
//                   message: 'Символов должно быть не меньше 6',
//                 },
//               })}
//             />
//             <AnimatePresence>
//               {passwordFieldError && (
//                 <motion.div
//                   initial={{ y: -5, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -5, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                   className='form__field__required-message'
//                 >
//                   <p
//                     style={{
//                       color: 'red',
//                     }}
//                   >
//                     {passwordFieldError}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       )}

{
  /* <button type='submit' className={classNames('form__submit form__button')}>
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
      )} */
}
