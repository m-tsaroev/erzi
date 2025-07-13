import { api } from '../api'

const registration = (email, password) => {
  return api('/user/create', {
    body: JSON.stringify({
      email,
      password
    })
  })
}

export { registration }