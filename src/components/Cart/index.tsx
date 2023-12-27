import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl, totalPrice } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => dispatch(close())

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBAr>
        {items.length > 0 ? (
          <>
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
                Total de {parseToBrl(totalPrice(items))}
                <span>Em até 6x sem juros</span>
              </S.Prices>
              <Button
                title="Clique aqui pra prosseguir com a compra"
                type="button"
                onClick={goToCheckout}
              >
                Continuar com a compra
              </Button>
            </ul>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para
            continuar.
          </p>
        )}
      </S.SideBAr>
    </S.CartContainer>
  )
}

export default Cart
