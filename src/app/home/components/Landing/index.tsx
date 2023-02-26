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
          priority
        />
      </section>
      <section className={_.hero}>
        <h1 className={_.title}>
          Pure Coffee.<br />
          Pure Experience.
        </h1>
        <p className={_.details}>
          We’re proud to offer our exquisite coffee and proud to support producer partners doing sustainability work that benefits their farms, their communities, and the planet.
        </p>
      </section>
    </main>
  )
}

export default Landing
