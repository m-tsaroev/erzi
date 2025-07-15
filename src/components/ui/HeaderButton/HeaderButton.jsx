import classNames from 'classnames'
import InlineSVG from 'react-inlinesvg'
import './HeaderButton.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModal } from '@/store/slices/uiSlice'

const HeaderButton = (props) => {
  const { title, to, className, icon, itemsCount } = props

  const iconSvg = <InlineSVG src={`/${icon}.svg`} />

  const isAuth = useSelector((state) => !!state.auth.accessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onNavigate = () => {
    if (isAuth) {
      navigate(to)
    } else {
      dispatch(openLoginModal())
    }
  }

  return (
    <button
      title={title}
      className={classNames('header__button', className)}
      onClick={onNavigate}
    >
      {itemsCount && (
        <span className='header__button__items-count'>{itemsCount}</span>
      )}
      <div className='header__button-icon'>{iconSvg}</div>
    </button>
  )
}

export { HeaderButton }
