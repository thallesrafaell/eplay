import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { parseToBrl } from '../../utils'
import { useGetFeatureGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>R${parseToBrl(game.prices.old)}</span>
            <br />
            Por apenas R${parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click aqui para aproveitar está oferta."
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
