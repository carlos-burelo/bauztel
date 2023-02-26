'use client'
import { useState } from 'react'
import _ from './ProductGallery.module.scss'
import Image from 'next/image'

interface Props {
  thumbnail: string
  gallery: string[]
  alt: string
}

const ProductGallery: FC<Props> = ({ gallery, thumbnail, alt }) => {
  const [activeImage, setActiveImage] = useState(thumbnail)

  const handleImageChange = (image: string) => () => {
    setActiveImage(image)
  }

  return (
    <div className={_.galleryContainer}>
      <Image className={_.image} src={activeImage} alt={alt} width={300} height={300} />
      <div className={_.galleryImages}>
        {gallery.map((image, index) => (
          <Image
            className={_.image}
            key={index}
            src={image}
            alt={alt}
            onClick={handleImageChange(image)}
            width={70}
            height={70}
          />
        ))}
      </div>
    </div>

  )
}

export default ProductGallery
