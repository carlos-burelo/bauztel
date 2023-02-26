import { ProductInterface } from '#/shared/types/schemas'
import Product from '../Product'
import _ from './ProductList.module.scss'

interface Props {
  list: ProductInterface[]
}

const ProductList: FC<Props> = ({ list }) => {
  return (
    <div className={_.productList}>
      {list.map((product) => (
        <Product key={product.slug} {...product} />
      ))}
    </div>
  )
}

export default ProductList