import { api } from '../api'

const getProduct = (id) => {
  return api(`/product/${id}`)
}

export { getProduct }
