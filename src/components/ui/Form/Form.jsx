import './Form.scss'
import { Logo } from '../Logo'
import classNames from 'classnames'

const Form = (props) => {
  const { onSubmit, children, isRegistrationForm, className } = props

  return (
    <form className={classNames('form', className)} onSubmit={onSubmit}>
      <Logo className='form__logo' />
      <h3 className='form__title'>
        {isRegistrationForm ? 'Создание аккаунта' : 'Добро пожаловать!'}
      </h3>
      {children}
    </form>
  )
}

export { Form }
