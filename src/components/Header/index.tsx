import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'

import {
  CartButton,
  Hamburguer,
  HeaderBar,
  HeaderRow,
  Links,
  LinksItem,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCArt = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinksItem>
                <Link to="/categorias">Categorias</Link>
              </LinksItem>
              <LinksItem>
                <a href="">Novidades</a>
              </LinksItem>
              <LinksItem>
                <a href="">Promoções</a>
              </LinksItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCArt}>
          {items.length} <span>- produto(s)</span>
          <img src={cart} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinksItem>
            <Link to="/categorias">Categorias</Link>
          </LinksItem>
          <LinksItem>
            <a href="">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="">Promoções</a>
          </LinksItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
