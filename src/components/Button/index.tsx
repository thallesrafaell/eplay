import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
}

const Button = ({ type, children, title, onclick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onclick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
