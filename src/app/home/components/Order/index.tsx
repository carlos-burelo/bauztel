import _ from './Order.module.scss'
import Image from 'next/image'
import Button from '#/shared/components/elements/Button'

const Order: FC = () => {
  return (
    <section className={_.order}>
      <div className={_.info}>
        <h2 className={_.title}>Ordena tu café favorito</h2>
        <p className={_.paragraph}>Ofrecemos una selección premium de granos de todo el mundo. Encuentra el sabor perfecto y recíbelo fresco en la puerta de tu casa. ¡Disfruta del mejor café sin salir de casa!</p>
        <Button text='Ordenar ahora' href='/products' fit />
      </div>
      <div className={_.image}>
        <Image
          src='/order.jpg'
          alt='Order coffee'
          width={500}
          height={400}
          loading='lazy'
          className={_.img}
        />
      </div>
    </section>
  )
}

export default Order
