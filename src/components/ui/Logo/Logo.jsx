import classNames from 'classnames'
import { NavigationLink } from '../NavigationLink'

const Logo = (props) => {
  const { loading = 'lazy', title, className } = props

  return (
    <NavigationLink
      title={title}
      className={classNames('logo', className)}
      to='/'
    >
      <img src='/logo.svg' alt='' width={102} height={102} loading={loading} />
    </NavigationLink>
  )
}

export { Logo }
