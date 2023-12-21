import { useGetOnsaleQuery, useGetSoonQuery } from '../../services/api'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

export interface GAlleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  release_date?: string
  description: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GAlleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnsaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList games={onSaleGames} title="Promções" background="gray" />
        <ProductList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
