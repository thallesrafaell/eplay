import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Links, LinksItem } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => (
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
    <LinkCart href="#">
      0 - produto(s) <img src={cart} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)
export default Header
