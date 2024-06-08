import _ from './AboutUs.module.scss'
import Image from 'next/image'
import Button from '#/shared/components/elements/Button'

const AboutUs: FC = () => {
  return (
    <div className={_.aboutUs}>
      <Image
        className={_.img}
        alt="About Us"
        height={500}
        width={300}
        src="/machine.jpg"
        priority
      />
      <div className={_.box}>
        <h2 className={_.title}>Descubre el Encanto de Brasil en Cada Taza</h2>
        <p className={_.decription}>
          Sumérgete en la rica tradición cafetera de Brasil con nuestra nueva sección. Provenientes de las exuberantes regiones cafetaleras del país, nuestros granos brasileños ofrecen un sabor único y distintivo que cautiva los sentidos. Experimenta la pasión y el cuidado con los que cada grano es cultivado, llevando a tu hogar la auténtica esencia de Brasil en cada taza. 
        </p>
        <Button href="/products" text="Compra ahora!" fit />
      </div>
    </div>
  )
}

export default AboutUs
