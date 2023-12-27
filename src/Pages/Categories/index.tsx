import Loader from '../../components/Loader'
import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadinAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGAmes, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGAmes, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGAmes && rpgGAmes) {
    return (
      <>
        <ProductList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
          isLoading={isLoadinAction}
        />
        <ProductList
          id="sports"
          games={sportGames}
          title="Esporte"
          background="gray"
          isLoading={isLoadingSports}
        />
        <ProductList
          id="fight"
          games={fightGAmes}
          title="Luta"
          background="black"
          isLoading={isLoadingFight}
        />
        <ProductList
          id="rpg"
          games={rpgGAmes}
          title="RPG"
          background="gray"
          isLoading={isLoadingRpg}
        />
        <ProductList
          id="simulation"
          games={simulationGames}
          title="Simulção"
          background="black"
          isLoading={isLoadingSimulation}
        />
      </>
    )
  }
  return <Loader />
}
export default Categories
