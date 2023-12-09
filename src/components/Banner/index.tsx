import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-spider.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$250,00</span>
          <br />
          Por apenas R$ 99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Click aqui para aproveitar está oferta."
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
