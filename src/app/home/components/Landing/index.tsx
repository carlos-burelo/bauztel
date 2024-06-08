import Button from '#/shared/components/elements/Button'
import Image from 'next/image'
import _ from './Landing.module.scss'

const Landing: FC = () => {
  return (
    <main className={_.landing}>
      <section className={_.image}>
        <Image
          src='/hero.jpg'
          width={400}
          height={600}
          alt='Bauztel coffe'
          className={_.img}
          loading='eager'
          priority
        />
      </section>
      <section className={_.hero}>
        <h1 className={_.title}>
          Momentos especiales,<br />
          café único.
        </h1>
        <p className={_.details}>
          Descubre la experiencia única de nuestro café seleccionado de los mejores granos. Ofrecemos asesoramiento personalizado y productos frescos de alta calidad. ¡Transforma tu rutina diaria con el sabor excepcional de nuestro café!
        </p>
        <div className={_.buttons}>
          <Button href='/products' text='Comprar ahora' />
          <Button href='/about' text='Nosotros' />
        </div>
      </section>
    </main>
  )
}

export default Landing
