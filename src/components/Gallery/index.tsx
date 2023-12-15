import Section from '../Section'
import imagem from '../../assets/images/diablo.png'
import { Item, Items } from './styles'

const GAllery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={imagem} alt="" />
      </Item>
      <Item>
        <img src={imagem} alt="" />
      </Item>
      <Item>
        <img src={imagem} alt="" />
      </Item>
      <Item>
        <img src={imagem} alt="" />
      </Item>
    </Items>
  </Section>
)

export default GAllery
