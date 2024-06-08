import _ from './Steps.module.scss'
import Image from 'next/image'

const steps = [
  {
    icon: '/coffee-icon-0.png',
    subtitle: 'Regístrate'
  },
  {
    icon: '/coffee-icon-1.png',
    subtitle: 'Obtén tu Enlace'
  },
  {
    icon: '/coffee-icon-2.png',
    subtitle: 'Gana Comisiones'
  }

]


const Steps: FC = () => {
  return (
    <div className={_.container}>
      <div className={_.steps}>
        {steps.map((step, i) => (
          <div className={_.step} key={i}>
            <Image
              src={step.icon}
              alt="coffee-icon"
              width={60}
              height={60}
              className={_.icon}
            />
            <h4 className={_.subtitle}>{step.subtitle}</h4>
          </div>
        ))}
      </div>
      <div className={_.content}>
        <h3 className={_.title}>
          ¡Sigue nuestros pasos y te ayudaremos! 
        </h3>
        <p className={_.description}>
          ¡Sigue nuestra guía y estaremos contigo en cada paso! Descubre cómo podemos ayudarte en el camino hacia el éxito.
        </p>
      </div>
    </div>
  )
}

export default Steps
