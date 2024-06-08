import { HeartIcon } from '#/shared/components/svg/icons'
import { cx } from '#/shared/utils/classname'
import Link from 'next/link'
import _ from './Hero.module.scss'

const Hero: FC = () => {

  return (
    <div className={_.hero}>
      <h1 className={_.title}>
        Contáctanos: Estamos Aquí para Ayudarte
      </h1>
      <p className={_.description}>
        Encuéntranos y Contáctanos Fácilmente: Estamos Aquí para Atender Todas tus Consultas, Comentarios y Solicitudes con una Variedad de Opciones de Contacto Disponibles.
      </p>
      <h2 className={_.subtitle}>
        Encuentranos
      </h2>
      <div className={_.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0350625383307!2d-93.10150688461606!3d16.774931093077758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed279e18b9ed59%3A0x8a9403242322789d!2sBauztel%20Caf%C3%A9!5e0!3m2!1ses!2smx!4v1659427205104!5m2!1ses!2smx" width="600" height="400" loading="lazy" />
      </div>
      <p className={_.description}>
        Explora nuestra ubicación en el mapa para encontrar fácilmente nuestro punto de venta más cercano. ¡Esperamos verte pronto!
      </p>
      <h2 className={_.subtitle}>
        Contáctanos
      </h2>
      <div className={_.contact}>
        <div className={_.box}>
          <div className={_.contactItem}>
            <h3 className={_.contactTitle}>
              Telefono
            </h3>
            <p className={cx(_.contactDescription, _.linkable)}>
              <HeartIcon /> +52 1 55 1234 5678
            </p>
          </div>
          <div className={_.contactItem}>
            <h3 className={_.contactTitle}>
              Correo
            </h3>
            <p className={_.contactDescription}>
              <HeartIcon />
              <Link href="mailto:help@bauztel.com">
                help@bauztel.com
              </Link>
            </p>
          </div>
        </div>
        <div className={_.contactItem}>
          <h3 className={_.contactTitle}>
            Ubicación
          </h3>
          <div className={cx(_.contactDescription, _.location)}>
            <p className={_.icon}>
              <HeartIcon />
            </p>
            <p>
              Calle Circunvalación, Número 238, Colonia Fracc. Renovación, Código Postal 29010, Municipio Tuxtla Gutiérrez, Estado Chiapas, México.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
