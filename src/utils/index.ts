export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const totalPrice = (items: Game[]) => {
  return items.reduce((acumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (acumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}
