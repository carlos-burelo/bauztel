import ProductDetails from './components/ProductDetails'
import { PRODUCTS } from '#/shared/mocks/products'
import { ProductInterface } from '#/shared/types/schemas'

export async function generateStaticParams () {
  return PRODUCTS.map((p) => ({
    product: p.slug,
  }))
}

const ProductPage: Page = async ({ params }) => {
  const slug = params.product
  const product = PRODUCTS.find((product) => product.slug === slug) as ProductInterface
  return (
    <>
      <ProductDetails {...product} />
    </>
  )
}

export default ProductPage