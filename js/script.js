let totalPrice = 0

const priceList = {
  platea: 129000,
  luneta: 113000,
  general: 101000
}

const $ = selector => document.getElementById(selector)

const setIva = price => price * 0.16

const setNetPrice = (price, iva) => price + iva

const postValues = (totalPrice, ivaPrice, netPrice) => {
  const $totalPrice = $('price')
  const $iva = $('iva')
  const $netPrice = $('netPrice')
  $totalPrice.innerHTML = `\$${totalPrice}`
  $iva.innerHTML = `\$${ivaPrice}`
  $netPrice.innerHTML = `\$${netPrice}`
}

const handlePrices = price => {
  totalPrice += price
  let ivaPrice = setIva(totalPrice)
  let netPrice = setNetPrice(totalPrice, ivaPrice)
  return postValues(totalPrice, ivaPrice, netPrice)
}

const handleTickets = e => {
  const typeOfTicket = e.id
  const ticketQuantity = e.value
  const $price = $(typeOfTicket)
  const ticketsPrice = ticketQuantity * priceList[typeOfTicket]
  $price.innerHTML = `\$${ticketsPrice}`
  return handlePrices(ticketsPrice)
}