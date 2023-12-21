import ProductList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGAmes } = useGetFightGamesQuery()
  const { data: rpgGAmes } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGAmes && rpgGAmes) {
    return (
      <>
        <ProductList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductList
          id="sports"
          games={sportGames}
          title="Esporte"
          background="gray"
        />
        <ProductList
          id="fight"
          games={fightGAmes}
          title="Luta"
          background="black"
        />
        <ProductList id="rpg" games={rpgGAmes} title="RPG" background="gray" />
        <ProductList
          id="simulation"
          games={simulationGames}
          title="Simulção"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Categories
