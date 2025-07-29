import './Form.scss'
import { Logo } from '../Logo'

const Form = (props) => {
  const { onSubmit, children, isRegistrationForm } = props

  return (
    <form className='form' onSubmit={onSubmit}>
      <Logo className='form__logo' />
      <h3 className='form__title'>
        {isRegistrationForm ? 'Создание аккаунта' : 'Добро пожаловать!'}
      </h3>
      {children}
    </form>
  )
}

export { Form }
