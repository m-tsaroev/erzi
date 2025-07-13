import { api } from '../api'

const getProducts = () => {
  return api(`/products`)
}

export { getProducts }
