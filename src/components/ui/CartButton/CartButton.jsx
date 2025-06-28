import classNames from 'classnames'
import './CartButton.scss'

const CartButton = (props) => {
  const { itemsCount, className } = props

  const cartSvgIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      fill='none'
    >
      <path
        fill='#fff'
        d='M0 4.688a.937.937 0 0 1 .938-.938H3.75a.937.937 0 0 1 .91.71l.759 3.04h21.769a.938.938 0 0 1 .909 1.164l-2.813 11.25a.937.937 0 0 1-.909.711H7.5a.938.938 0 0 1-.91-.71L3.02 5.624H.937A.937.937 0 0 1 0 4.687Zm5.888 4.687L8.23 18.75h15.413l2.344-9.375h-20.1Zm3.487 15a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm-3.75 1.875a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM22.5 24.375a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm-3.75 1.875a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z'
      />
    </svg>
  )

  return (
    <button className={classNames('cart-button', className)}>
      {itemsCount && (
        <span className='cart-button__items-count'>{itemsCount}</span>
      )}
      <div className='cart-button__icon'>{cartSvgIcon}</div>
    </button>
  )
}

export { CartButton }
