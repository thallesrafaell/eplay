import Game from '../../Models/Game'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/jedi.png'
import street from '../../assets/images/street.png'
import fifa from '../../assets/images/fifa.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    image: resident,
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00']
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    image: fifa,
    system: 'PS5',
    infos: ['-50%', 'R$ 99,90']
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    image: resident,
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00']
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    image: fifa,
    system: 'PS5',
    infos: ['-50%', 'R$ 99,90']
  }
]
const embreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'DIABLO IV',
    image: diablo,
    system: 'Windows',
    infos: ['10/08']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    image: zelda,
    system: 'Switch',
    infos: ['05/04']
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    image: starwars,
    system: 'Windows',
    infos: ['19/10']
  },
  {
    id: 8,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    image: street,
    system: 'Windows',
    infos: ['23/12']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promções" background="gray" />
    <ProductList games={embreve} title="Em breve" background="black" />
  </>
)
export default Home
