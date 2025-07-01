import './Logo.scss'
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
      <img src='/logo.svg' alt='' width={198} height={97} loading={loading} />
    </NavigationLink>
  )
}

export { Logo }
