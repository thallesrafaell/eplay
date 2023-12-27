import * as S from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { parseToBrl } from '../../utils'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store//reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispach = useDispatch()

  const addToCart = () => {
    dispach(add(game))
    dispach(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De R$ {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por R$ {parseToBrl(game.prices.current)} </>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique para adicionar ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero
