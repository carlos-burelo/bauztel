import _ from './Hero.module.scss'
import Button from '#components/elements/Button'
import Image from 'next/image'

const Hero: FC = () => {
  return (
    <main className={_.hero}>
      <div className={_.content}>
        <h1 className={_.title}>
          Lorem ipsum, dolor sit amet <mark>consectetur</mark> ?
        </h1>
        <p className={_.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo accusantium atque placeat ex unde.
        </p>
        <Button href="/wholesale#form" text='Get Started' fit />
      </div>
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={500}
        height={600}
        className={_.image}
      />
    </main>
  )
}

export default Hero
