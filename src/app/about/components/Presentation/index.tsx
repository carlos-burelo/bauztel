import Image from 'next/image'
import _ from './Presentation.module.scss'

const Presentation: FC = () => {
  return (
    <section className={_.presentation}>
      <div className={_.labels}>
        <h1 className={_.title}>
          Conoce Nuestra Pasión: El Arte del Café Perfecto
        </h1>
        <p className={_.description}>
          En nuestra tienda online, nos dedicamos a ofrecerte lo mejor del mundo del café. Seleccionamos cuidadosamente granos de alta calidad para garantizar una experiencia excepcional en cada taza. Nuestro compromiso con la frescura y el sabor nos impulsa a brindarte un servicio personalizado. ¡Explora nuestra selección y disfruta del café perfecto en casa!
        </p>
      </div>
      <div className={_.image}>
        <Image
          src='/about.jpg'
          alt='About of the company'
          width={500}
          height={500}
          loading='eager'
          className={_.img}
          priority
        />
      </div>
    </section>
  )
}

export default Presentation
