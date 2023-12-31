import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  maxwidth?: string
}

type RowProps = {
  margintop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.margintop || 'auto'};
  align-items: flex-end;

  @media screen and (max-width: ${breakPoints.tablet}) {
    display: block;
    margin-top: 16px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxwidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
