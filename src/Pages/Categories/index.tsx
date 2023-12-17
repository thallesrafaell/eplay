import ProductList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [acao, setAcao] = useState<Game[]>([])
  const [esporte, setEsporte] = useState<Game[]>([])
  const [simulacao, setSimulacao] = useState<Game[]>([])
  const [luta, setLuta] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esporte')
      .then((res) => res.json())
      .then((res) => setEsporte(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))
  }, [])

  return (
    <>
      <ProductList games={acao} title="Ação" background="black" />
      <ProductList games={esporte} title="Esporte" background="gray" />
      <ProductList games={luta} title="Luta" background="black" />
      <ProductList games={rpg} title="RPG" background="gray" />
      <ProductList games={simulacao} title="Simulção" background="black" />
    </>
  )
}
export default Categories
