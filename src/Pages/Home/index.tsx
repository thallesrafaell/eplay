import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import { useGetOnsaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnsaleQuery()
  const { data: soonGames, isLoading: isLoadingSonn } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        id="on-sale"
        games={onSaleGames!}
        title="Promções"
        background="gray"
        isLoading={isLoadingSale}
      />
      <ProductList
        id="coming-soon"
        games={soonGames!}
        title="Em breve"
        background="black"
        isLoading={isLoadingSonn}
      />
    </>
  )
}
export default Home
