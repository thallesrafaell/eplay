import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import {
  Overlay,
  CartContainer,
  SideBAr,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtua) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtua.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBAr>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button
                type="button"
                className=".button"
                onClick={() => removeItem(item.id)}
              ></button>
            </CartItem>
          ))}

          <Quantity>{items.length} jogo(s) no carrinho</Quantity>
          <Prices>
            Total de {formatPrice(totalPrice())}
            <span>Em até 6x sem juros</span>
          </Prices>
          <Button title="Clique aqui pra prosseguir com a compra" type="button">
            Continuar com a compra
          </Button>
        </ul>
      </SideBAr>
    </CartContainer>
  )
}

export default Cart
