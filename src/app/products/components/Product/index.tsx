import { ProductInterface } from '#/shared/types/schemas'
import Image from 'next/image'
import Link from 'next/link'
import _ from './Product.module.scss'

interface Props extends ProductInterface {
}

const Product: FC<Props> = ({ name, price, thumbnail, slug, sale }) => {

  const newPrice = sale ? price - (price * sale.discount) / 100 : price

  return (
    <Link href={`/products/${slug}`} className={_.product}>
      <Image
        className={_.image}
        src={thumbnail}
        alt={name}
        width={300}
        height={300}
        priority
      />
      <div className={_.info}>
        <h3 className={_.name}>{name}</h3>
        <div className={_.priceArea}>
          <p className={_.price}>${newPrice} MXN </p>
          {sale && <p className={_.discount}>-{sale.discount}%</p>}
        </div>
      </div>
    </Link>
  )
}

export default Product
