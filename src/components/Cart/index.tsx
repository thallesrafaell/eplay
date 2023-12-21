import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import star from '../../assets/images/jedi.png'
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
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBAr>
        <ul>
          <CartItem>
            <img src={star} alt="" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>Rpg</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" className=".button"></button>
          </CartItem>
          <CartItem>
            <img src={star} alt="" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>Rpg</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
          </CartItem>
          <Quantity>2 jogo(s) no carrinho</Quantity>
          <Prices>
            Total de R$250,00 <span>Em até 6x sem juros</span>
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
