import { Banner, Infos } from './styles'

import hogwartsBanner from '../../assets/images/hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${hogwartsBanner})` }}>
    <div className="container">
      <div>
        <Tag>RPG </Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique para adicionar ao carrinho"
          variant="primary"
        >
          Adicionar ao Carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)
export default Hero
