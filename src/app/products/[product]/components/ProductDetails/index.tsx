'use client'
import { ProductInterface } from '#/shared/types/schemas'
import ProductGallery from '../ProductGallery'
import _ from './ProductDetails.module.scss'
import { useState } from 'react'
import ProductSpecs from '../ProductSpecs'
import { HeartIcon } from '#/shared/components/svg/icons'
import Button from '#/shared/components/elements/Button'


const ProductDetails: FC<ProductInterface> = (product) => {
  const {
    name,
    price,
    description,
    thumbnail,
    gallery,
    sku,
    stock,
    categories,
    ...rest
  } = product

  const [quantity, setQuantity] = useState(1)

  const handleLess = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const handleMore = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
      <div className={_.details}>
        <ProductGallery thumbnail={thumbnail} gallery={gallery} alt={name} />
        <div className={_.info}>
          <h1 className={_.name}>{name}</h1>
          <div className={_.priceBox}>
            <h3 className={_.price}>$ {price} MXN</h3>
            <p className={_.stock}>Disponibles: <strong>{stock}</strong></p>
          </div>
          <p className={_.description}>
            {description}
          </p>
          <div className={_.addToCart}>
            <div className={_.quantity}>
              <button className={_.less} onClick={handleLess}>-</button>
              <input className={_.input} minLength={0} type="number" value={quantity} readOnly />
              <button className={_.more} onClick={handleMore}>+</button>
            </div>
            <Button className={_.btn}>
              Agregar al carrito
            </Button>
          </div>
          <div className={_.aditionalInfo}>
            <p className={_.sku}><strong>SKU</strong>: {sku}</p>
            <p className={_.categories}><strong>Categorías</strong>: {categories.join(', ')}</p>
          </div>

          <div className={_.addToFavorite}>
            <Button className={_.btn}>
              <HeartIcon />
              Agregar a favoritos
            </Button>
            <Button className={_.btn}>
              <HeartIcon />
              Comprar ahora
            </Button>
          </div>
        </div>
      </div>
      <ProductSpecs {...rest} />
    </>
  )
}

export default ProductDetails
