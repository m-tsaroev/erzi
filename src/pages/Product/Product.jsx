import { useParams } from 'react-router-dom'
import './Product.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '@/store/slices/productsSlice'

const Product = () => {
  const { id } = useParams()

  const { selectedProduct, error } = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      const resultAction = await dispatch(getProduct(id))

      if (getProduct.fulfilled.match(resultAction)) {
        console.log(901)
      } else {
        console.log(9999)
        console.log(resultAction)
      }
    }

    fetchProduct()

  }, [dispatch, id, ])

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : selectedProduct ? (
        <div className='container'>{selectedProduct.title}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export { Product }
