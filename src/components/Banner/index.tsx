import Tag from '../Tag'
import Button from '../Button'

import { formatPrice } from '../ProductsList'
import { Imagem, Titulo, Precos } from './styles'
import { useGetFeatureGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>R${formatPrice(game.prices.old)}</span>
            <br />
            Por apenas R${formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click aqui para aproveitar está oferta."
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
