import './Form.scss'
import { Logo } from '../Logo'
import classNames from 'classnames'

const Form = (props) => {
  const {
    onSubmit,
    children,
    isRegistrationForm,
    className,
    /**
     * '' (default) | 'white' | 'light-blur'
     */
    mode,
    title,
    isModal=true
  } = props

  return (
    <form
      className={classNames('form', className, {
        [`form--${mode}`]: mode,
        'is-modal': isModal
      })}
      onSubmit={onSubmit}
    >
      <Logo className='form__logo' />
      <h3 className='form__title'>
        {isRegistrationForm ? 'Создание аккаунта' : title ? title : 'Добро пожаловать'}
      </h3>
      {children}
    </form>
  )
}

export { Form }
