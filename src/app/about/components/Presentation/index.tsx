import Image from 'next/image'
import _ from './Presentation.module.scss'

const Presentation: FC = () => {
  return (
    <section className={_.presentation}>
      <div className={_.labels}>
        <h1 className={_.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={_.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam veniam eaque alias? Suscipit libero consequuntur unde odit, voluptatem facilis perspiciatis quam debitis quia, tempora, iusto earum omnis molestiae blanditiis?
        </p>
      </div>
      <div className={_.image}>
        <Image
          src='/about.jpg'
          alt='About of the company'
          width={500}
          height={500}
          className={_.img}
          priority
        />
      </div>
    </section>
  )
}

export default Presentation
