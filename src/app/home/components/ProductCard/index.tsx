import { ProductInterface } from '#/shared/types/schemas'
import Image from 'next/image'
import Link from 'next/link'
import _ from './ProductCard.module.scss'


const ProductCard: FC<ProductInterface> = (product) => {
  const { price, sale, slug, thumbnail, name } = product
  const newPrice = sale ? price - (price * sale.discount) / 100 : price

  return (
    <Link className={_.product} href={`/products/${slug}`}>
      <Image
        className={_.image}
        src={thumbnail}
        alt={name}
        width={300}
        height={400}
      />
      <div className={_.info}>
        <div className={_.meta}>
          <h2 className={_.name}>{name}</h2>
          <div className={_.priceArea}>
            <p className={_.price}>${newPrice} MXN</p>
            {sale && (
              <p className={_.oldPrice}>
                <del>${price} MXN</del>
              </p>
            )}
          </div>
        </div>
        <button className={_.button}>
          <span>View Product</span>
        </button>
      </div>
    </Link>
  )
}

export default ProductCard