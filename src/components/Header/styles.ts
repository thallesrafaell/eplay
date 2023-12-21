import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
