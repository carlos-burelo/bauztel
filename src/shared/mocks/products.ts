import { ProductInterface, ReviewInterface } from '../types/schemas'

const types = ['molido', 'tostado', 'grano', 'instantaneo', 'capsulas']

const aleatoryType = () => types[Math.round(Math.random() * (types.length - 1))]

const aleatoryCategories = () => Array.from({ length: 3 }, () => types[Math.round(Math.random() * (types.length - 1))])

const aleatoryWeight = () => {
  // 250, 500, 750, 1000, 1250 , 1500, 2000, 5000, 10000
  // si es es menor a 1000 se convierte en gramos y se le agrega el sufijo g
  // si es mayor a 1000 se convierte en kilos y se le agrega el sufijo kg
  const weights = [250, 500, 750, 1000, 1250, 1500, 2000, 5000, 10000]
  const weight = weights[Math.round(Math.random() * (weights.length - 1))]
  return weight < 1000 ? `${weight}g` : `${weight / 1000}kg`
}

const aleatoryPrice = (base: number) => {
  const max = base + 1000
  const min = base - 1000
  // round to 0 decimals only if the number is an integer
  const random = Math.round(Math.random() * (max - min) + min)
  return random % 1 === 0 ? random : /* remove decimals */ random.toFixed(2).replace(/\.00$/, '')
}

export const PRODUCTS: ProductInterface[] =
  Array.from({ length: 20 }, (_, i) => ({
    slug: `product-${i}`,
    name: `Café ${aleatoryType()} ${aleatoryWeight()}`,
    price: aleatoryPrice(1000),
    type: aleatoryType(),
    thumbnail: '/hero.jpg',
    gallery: Array.from({ length: 5 }, () => `/hero.jpg`),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    stock: 10,
    sku: '123456789',
    categories: aleatoryCategories(),
    reviews: Array.from({ length: 5 }, () => ({
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      email: 'test@email.com',
      raiting: 5,
      userName: 'Test User',
    } as ReviewInterface)),
    ...i % 2 === 0 && {
      sale: {
        discount: Math.round(Math.random() * (50 - 10) + 10),
        price: 900,
        startDate: new Date().toLocaleString(),
        endDate: new Date().toLocaleString(),
      }
    },
    aditionalInfo: {
      weight: 100,
      dimensions: {
        width: 90,
        height: 50,
        length: 90
      },
    }
  } as ProductInterface))