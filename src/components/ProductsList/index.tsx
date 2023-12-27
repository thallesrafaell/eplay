import { Game } from '../../Pages/Home'
import Product from '../Product'
import { parseToBrl } from '../../utils'

import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductList = ({ title, background, games, id }: Props) => {
  const gameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }
  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={gameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
