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