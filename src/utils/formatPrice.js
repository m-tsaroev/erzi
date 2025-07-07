const formatPrice = (number) => {
  let price = number.toString()
  let formattedPrice = ''

  for (let i = 0; i < price.length; i++) {
    formattedPrice += (i + 2) % 3 === 0 && price.length > 3 ? ' ' + price[i] : price[i]
  }

  return formattedPrice
}

export { formatPrice }