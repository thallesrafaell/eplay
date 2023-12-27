/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import { useGetOnsaleQuery, useGetSoonQuery } from '../../services/api'

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
