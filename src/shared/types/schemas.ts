export interface ProductInterface {
  slug: string
  name: string
  price: number
  thumbnail: string
  gallery: string[]
  description: string
  stock: number
  sku: string
  aditionalInfo: AditionalInfoInterface
  reviews: ReviewInterface[]
  categories: string[]
  type: string
  summary: string
  sale: {
    discount: number
    price: number
    startDate: Date
    endDate: Date
  }
}

export interface AditionalInfoInterface {
  weight: number
  dimensions: DimensionsInterface
}

export interface DimensionsInterface {
  width: number
  height: number
  length: number
}

export interface ReviewInterface {
  raiting: number
  userName: string
  email: string
  comment: string
}