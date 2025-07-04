import './Logo.scss'
import classNames from 'classnames'
import { NavigationLink } from '../NavigationLink'

const Logo = (props) => {
  const { loading = 'lazy', title, className, isLight } = props

  return (
    <NavigationLink
      title={title}
      className={classNames('logo', className)}
      to='/'
    >
      <img src={isLight ? '/logo-light.svg' : '/logo.svg'}alt='' width={198} height={97} loading={loading} />
    </NavigationLink>
  )
}

export { Logo }
