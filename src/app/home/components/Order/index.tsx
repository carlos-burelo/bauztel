import _ from './Order.module.scss'
import Image from 'next/image'
import Button from '#/shared/components/elements/Button'

const Order: FC = () => {
  return (
    <section className={_.order}>
      <div className={_.info}>
        <h2 className={_.title}>Order your favorite coffee</h2>
        <p className={_.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum ducimus optio nemo voluptatem quasi facilis minus voluptatum debitis, blanditiis quaerat? Consequuntur id asperiores assumenda nulla!</p>
        <Button text='Order now' href='/products' fit />
      </div>
      <div className={_.image}>
        <Image
          src='/order.jpg'
          alt='Order coffee'
          width={500}
          height={400}
          className={_.img}
        />
      </div>
    </section>
  )
}

export default Order
