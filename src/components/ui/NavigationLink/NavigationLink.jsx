import classNames from 'classnames'
import './NavigationLink.scss'
import { NavLink } from 'react-router-dom'

const NavigationLink = (props) => {
  const { title, children, className, to } = props

  return (
    <NavLink
      title={title}
      aria-label={title}
      to={to}
      className={classNames('navigation-link', className)}
    >
      {children}
    </NavLink>
  )
}

export { NavigationLink }
