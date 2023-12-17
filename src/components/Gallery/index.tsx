import Section from '../Section'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import imagem from '../../assets/images/diablo.png'
import hogwarts from '../../assets/images/hogwarts.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'

type GAlleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GAlleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: imagem
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/78CP8na1Fpo?si=tyxrUvi6-eASK8bo'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const GAllery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GAlleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GAlleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="click para maximizar a media"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Icone de fechar" />
          </header>
          <img src={hogwarts} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default GAllery
