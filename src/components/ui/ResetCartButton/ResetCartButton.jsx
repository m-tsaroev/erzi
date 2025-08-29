import { useDispatch } from 'react-redux'
import './ResetCartButton.scss'
import { restoreCartItems, getCartItems } from '@/store/slices/cartSlice'
import { hideRestoreCartButton } from '@/store/slices/uiSlice'

const ResetCartButton = (props) => {
  const {} = props

  const dispatch = useDispatch()

  const resetIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
      <g clipPath='url(#a)'>
        <path
          fill='#03053D'
          d='M18.537 19.567A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )

  console.log(200)

  const resetCart = async () => {
    const resultaction = await dispatch(restoreCartItems())

    if (restoreCartItems.fulfilled.match(resultaction)) {
      await dispatch(getCartItems())
      dispatch(hideRestoreCartButton())
      console.log(5)
    } else {
      console.log(10)
    }
  }

  return (
    <button type='button' className='reset-cart-button' onClick={resetCart}>
      {resetIcon}
    </button>
  )
}

export { ResetCartButton }
