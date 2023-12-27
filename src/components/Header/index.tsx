import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCArt = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  to="/categorias"
                  title="Clique aqui para acessar a página de Categorias"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  to="/#coming-soon"
                  title="Clique aqui para acessar a sessão de Em Breve"
                >
                  Em breve
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  to="/#on-sale"
                  title="Clique aqui para acessar a sessão de Promoções"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCArt}>
          {items.length} <span> - produto(s)</span>
          <img src={cart} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinksItem>
            <Link
              to="/categorias"
              title="Clique aqui para acessar a página de Categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              to="/#coming-soon"
              title="Clique aqui para acessar a sessão de Em Breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              to="/#on-sale"
              title="Clique aqui para acessar a sessão de Promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header
