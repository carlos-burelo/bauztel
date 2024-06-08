import _ from './Hero.module.scss'
import Button from '#components/elements/Button'
import Image from 'next/image'

const Hero: FC = () => {
  return (
    <main className={_.hero}>
      <div className={_.content}>
        <h1 className={_.title}>
          Únete a Nuestro Programa de <mark>Afiliados</mark>!
        </h1>
        <p className={_.description}>
          ¡Conviértete en nuestro socio y gana comisiones promocionando nuestros productos de calidad!
        </p>
        <Button href="/wholesale#form" text='Inicia' fit />
      </div>
      <Image
        src="/coffe-team.jpg"
        alt="Hero"
        objectFit='cover'
        width={500}
        height={600}
        className={_.image}
      />
    </main>
  )
}

export default Hero
