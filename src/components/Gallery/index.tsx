import Section from '../Section'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import imagem from '../../assets/images/diablo.png'
import hogwarts from '../../assets/images/hogwarts.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

interface GAlleryItem {
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
interface ModalState extends GAlleryItem {
  IsVisible: boolean
}

const GAllery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    IsVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GAlleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GAlleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      IsVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  IsVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
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
      <Modal className={modal.IsVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Icone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default GAllery
