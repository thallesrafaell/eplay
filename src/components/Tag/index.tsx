import { TagContainer } from './styles'

export type Props = { size?: 'big' | 'small'; children?: string }
const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
