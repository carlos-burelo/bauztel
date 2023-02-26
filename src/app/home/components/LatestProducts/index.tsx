import { PRODUCTS } from '#/shared/mocks/products'
import ProductCard from '../ProductCard'
import _ from './LatestProducts.module.scss'

const LatestProducts: FC = () => {
  return (
    <div className={_.latest}>
      <h2 className={_.title}>Latest Products</h2>
      <div className={_.products}>
        {PRODUCTS.slice(0, 3).map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </div>
  )
}

export default LatestProducts
