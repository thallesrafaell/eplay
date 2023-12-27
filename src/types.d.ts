declare interface GAlleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
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
