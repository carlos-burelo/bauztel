import { ProductInterface } from '#/shared/types/schemas'
import Image from 'next/image'
import Link from 'next/link'
import _ from './Product.module.scss'

interface Props extends ProductInterface {
}

const Product: FC<Props> = ({ name, price, thumbnail, slug }) => {
  return (
    <Link href={`/products/${slug}`} className={_.product}>
      <Image className={_.image} src={thumbnail} alt={name} width={300} height={300} />
      <h3 className={_.title}>{name}</h3>
      <p className={_.price}>${price}</p>
    </Link>
  )
}

export default Product
