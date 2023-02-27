import { PRODUCTS } from '#/shared/mocks/products'
import Header from './components/Header'
import Infobar from './components/Infobar'
import ProductList from './components/ProductList'
import _ from './products.module.scss'


const ProductsPage: Page = () => {
  return (
    <div className={_.container}>
      <Header />
      <Infobar />
      <ProductList list={PRODUCTS} />
    </div>
  )

}

export default ProductsPage