const currencyFormatter = (amount) => {
  const currency = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
  })
  return currency.format(amount)
}

export default currencyFormatter