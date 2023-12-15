import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
`

export const Item = styled.li`
  img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`
