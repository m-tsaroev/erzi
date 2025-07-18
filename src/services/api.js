// const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = async (path, options = {}) => {
  const url = `/api${path}`

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options,
  }

  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body)
  }

  const res = await fetch(url, config)

  if (!res.ok) {
    let errorMessage

    if (res.status === 401) {
      errorMessage = 'Не авторизованы'
    } else {
      errorMessage = await res.text()
    }

    throw new Error(errorMessage || res.status)
  }

  const contentType = res.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return res.json()
  }

  console.log(contentType)

  return null
}

export { api }
