import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 480px;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
    content: ' ';
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
