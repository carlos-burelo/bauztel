import { ProductInterface, ReviewInterface } from '../types/schemas'

export const PRODUCTS: ProductInterface[] =
  Array.from({ length: 10 }, (_, i) => ({
    slug: `product-${i}`,
    name: `Café Molido o Tostado ${i}`,
    price: 1000,
    thumbnail: '/hero.jpg',
    gallery: Array.from({ length: 5 }, () => `/hero.jpg`),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    stock: 10,
    sku: '123456789',
    categories: ['cafe', 'molido', 'tostado'],
    reviews: Array.from({ length: 5 }, () => ({
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      email: 'test@email.com',
      raiting: 5,
      userName: 'Test User',
    } as ReviewInterface)),
    ...i % 2 === 0 && {
      sale: {
        discount: 10,
        price: 900,
        startDate: new Date(),
        endDate: new Date(),
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