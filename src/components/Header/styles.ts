import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media screen and (max-width: ${breakPoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        flex: 1;
        justify-content: space-between;
        display: none;
      }
    }
  }
`
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinksItem = styled.li`
  margin-right: 16px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    width: 100%;
    display: block;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`
