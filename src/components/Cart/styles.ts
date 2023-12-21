import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  let: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const SideBAr = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin: 16px 0 32px;
  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
`
export const ButtonClose = styled.button``

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    widht: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${cores.branca};
    font-weight: bold;
    font-size: 16px;
  }
  span {
    display: block;
    color: ${cores.branca};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 0 16px;
    margin-right: 8px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`
