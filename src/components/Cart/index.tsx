import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBAr>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button
                type="button"
                className=".button"
                onClick={() => removeItem(item.id)}
              ></button>
            </S.CartItem>
          ))}

          <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
          <S.Prices>
            Total de {parseToBrl(totalPrice())}
            <span>Em até 6x sem juros</span>
          </S.Prices>
          <Button title="Clique aqui pra prosseguir com a compra" type="button">
            Continuar com a compra
          </Button>
        </ul>
      </S.SideBAr>
    </S.CartContainer>
  )
}

export default Cart
