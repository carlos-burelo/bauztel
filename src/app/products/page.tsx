import { PRODUCTS } from '#/shared/mocks/products'
import Header from './components/Header'
import Infobar from './components/Infobar'
import ProductList from './components/ProductList'

const ProductsPage: Page = () => {
  return (
    <>
      <Header />
      <Infobar />
      <ProductList list={PRODUCTS} />
    </>
  )

}

export default ProductsPage