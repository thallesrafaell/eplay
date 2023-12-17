import { Banner, Infos } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { Game } from '../../Pages/Home'
import { formatPrice } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De R$ {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por R$ {formatPrice(game.prices.current)} </>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique para adicionar ao carrinho"
              variant="primary"
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}
export default Hero
