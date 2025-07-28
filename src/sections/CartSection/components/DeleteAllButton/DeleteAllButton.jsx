import InlineSVG from 'react-inlinesvg'
import classNames from 'classnames'
import './DeleteAllButton.scss'
import { useDispatch } from 'react-redux'
import { deleteAll, getCartItems } from '@/store/slices/cartSlice'

const DeleteAllButton = (props) => {
  const { className } = props
  const dispatch = useDispatch()

  const onDeleteAllButtonClick = async () => {
    const resultAction = await dispatch(deleteAll())

    if (deleteAll.fulfilled.match(resultAction)) {
      console.log(1);
      await dispatch(getCartItems())
    } else {
      console.log(2);
    }
    console.log(8);
  }

  return (
    <button
      onClick={onDeleteAllButtonClick}
      className={classNames('delete-all-button', className)}
    >
      <InlineSVG title='Reset' src='/reset.svg' width={24} height={24} />
      <span>delete all</span>
    </button>
  )
}

export { DeleteAllButton }
