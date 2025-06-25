import { Link } from 'react-router-dom'

const NavigationLink = (props) => {
  const { title, children, className, to } = props

  return (
    <Link title={title} aria-label={title} to={to} className={className}>
      {children}
    </Link>
  )
}

export { NavigationLink }
