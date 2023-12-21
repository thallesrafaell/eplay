import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'

import { CartButton, HeaderBar, Links, LinksItem } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCArt = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
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
        {items.length} - produto(s) <img src={cart} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
