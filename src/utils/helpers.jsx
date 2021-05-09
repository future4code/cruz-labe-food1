// get a array and summarize a list of all categorys
export const getCategorys = products =>
  products.reduce(
    (sum, item) =>
      !sum.includes(item.category) ? [...sum, item.category] : sum,
    []
  )

// get the array os categorys with products and convert to classified object
export const classifyProducts = (categorys, products) =>
  categorys.map(i => ({
    category: i,
    products: products.filter(j => j.category === i),
  }))

// format value to: R$ 12,34
export const formatPrice = price => {
  console.log({price})
  if (!price) return formatPrice('0.00')
  return Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

// format date to: 1 de Janeiro de 2021
export const formatDate = dateString =>
  new Date(dateString).toLocaleDateString('pt-BR', {dateStyle: 'long'})

// get the date in ISO format: 2021/01/01
export const getDate = dateString =>
  new Date(dateString).toISOString().slice(0, 10)

// format time to: 11:22
export const formatTime = time =>
  new Date(time).toLocaleTimeString('pt-BR', {timeStyle: 'short'})

export const calcTime = ({createdAt, expiresAt}) => {
  const time = new Date(expiresAt - createdAt)
  return formatTime(time)
}
