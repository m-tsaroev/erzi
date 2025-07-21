const formatPrice = (number) => {
  let price = number.toString().split('').reverse().join('')
  let formattedPrice = ''

  for (let i = price.length - 1; i >= 0; i--) {
    formattedPrice = (i % 3 === 0 ? ' ' + price[i] : price[i]) + formattedPrice
  }

  return formattedPrice.split('').reverse().join('')
}

export { formatPrice }