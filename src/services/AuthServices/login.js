import { api } from '../api'

const login = (email, password) => {
  return api('/user/login', {
    body: JSON.stringify({
      email,
      password
    })
  })
}

export { login }