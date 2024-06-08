import { ProductInterface, ReviewInterface } from '../types/schemas'


const capsulas = [
  '/capsula-0.png',
  '/capsula-1.webp',
  '/capsula-2.webp',
  '/capsula-3.webp',
  '/capsula-4.webp',
  '/capsula-5.png',
  '/capsula-6.webp',
  '/capsula-7.png',
]

const grano = [
  '/grano-0.png',
  '/grano-1.webp',
  '/grano-2.png',
  '/grano-3.png',
  '/grano-4.png',
  '/grano-5.png',
  '/grano-6.png',
  '/grano-7.png',
]

const instantaneo = [
  '/instantaneo-0.png',
  '/instantaneo-1.webp',
  '/instantaneo-2.webp',
  '/instantaneo-3.png',
  '/instantaneo-4.png',
  '/instantaneo-5.webp',
  '/instantaneo-6.jpg',
  '/instantaneo-7.png',
]

const molido = [
  '/molido-0.webp',
  '/molido-1.png',
  '/molido-2.webp',
  '/molido-3.png',
  '/molido-4.png',
  '/molido-5.png',
  '/molido-6.webp',
  '/molido-7.png',
]

const tostado = [
  '/tostado-0.png',
  '/tostado-1.png',
  '/tostado-2.png',
  '/tostado-3.png',
  '/tostado-4.webp',
  '/tostado-5.webp',
  '/tostado-6.webp',
  '/tostado-7.webp',
]

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

const images: Record<string, string[]> = {
  molido,
  tostado,
  grano,
  instantaneo,
  capsulas
}

const allImagesCount = [...molido, ...tostado, ...grano, ...instantaneo, ...capsulas].length

const aleatoryImage = (type: string) => {
  // max 7

  return images[type][Math.round(Math.random() * (images[type].length - 1))]
}


const aleatoryDescription = (type: string, weight: string, price: number | string) => {
  let description = `Disfruta de este delicioso café ${type}, perfecto para satisfacer tus mañanas con su aroma y sabor inigualables. `;

  if (weight.includes('kg')) {
    const weightInKg = parseFloat(weight.replace('kg', ''));
    description += `Viene en una presentación de ${weightInKg} kilogramos, ideal para los amantes del café que desean abastecerse por un buen tiempo. `;
  } else {
    const weightInGrams = parseInt(weight.replace('g', ''));
    description += `Con un peso de ${weightInGrams} gramos, esta bolsa de café es perfecta para disfrutar de múltiples tazas. `;
  }

  description += `El precio de esta exquisita variedad es de ${price} pesos. ¡Aprovecha esta oferta ahora y llévate a casa tu café favorito!`;

  return description;
}

const aleatorySummary = (type: string, weight: string, price: number | string) => {
  let summary = `Descubre el delicioso café ${type}, una elección perfecta para tus momentos de disfrute y relajación. `;

  if (weight.includes('kg')) {
    const weightInKg = parseFloat(weight.replace('kg', ''));
    summary += `Este café viene en una presentación de ${weightInKg} kilogramos, asegurando un suministro duradero para tu hogar o negocio. `;
  } else {
    const weightInGrams = parseInt(weight.replace('g', ''));
    summary += `Con un peso de ${weightInGrams} gramos, esta bolsa de café es ideal para disfrutar de múltiples tazas y compartir con tus seres queridos. `;
  }

  summary += `Disfruta de la calidad y frescura de nuestro café a un precio increíble de ${price} pesos. ¡No te pierdas esta oportunidad y añádelo a tu carrito hoy mismo!`;

  return summary;
}


const aleatoryPrice = (base: number) => {
  const max = base + 1000
  const min = base - 1000
  // round to 0 decimals only if the number is an integer
  const random = Math.round(Math.random() * (max - min) + min)
  return random % 1 === 0 ? random : /* remove decimals */ random.toFixed(2).replace(/\.00$/, '')
}

export const PRODUCTS: ProductInterface[] =
  Array.from({
    length: allImagesCount

  }, (_, i) => {
    const type = aleatoryType()
    const image = aleatoryImage(type)
    const price = aleatoryPrice(1000)
    const weight = aleatoryWeight()
    const description = aleatoryDescription(type, weight, price)
    const summary = aleatorySummary(type, weight, price)


    return {
      slug: `product-${i}`,
      name: `Café ${type} ${weight}`,
      price: price,
      type: type,
      thumbnail: image,
      gallery: Array.from({ length: 5 }, () => image),
      description: description,
      summary: summary,
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
    } as ProductInterface

  })