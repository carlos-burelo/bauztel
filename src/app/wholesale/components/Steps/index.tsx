import _ from './Steps.module.scss'
import Image from 'next/image'

const Steps: FC = () => {
  return (
    <div className={_.container}>
      <div className={_.steps}>
        {[0, 1, 2].map((step) => (
          <div className={_.step} key={step}>
            <Image
              src={`/coffee-icon-${step}.png`}
              alt="coffee-icon"
              width={60}
              height={60}
              className={_.icon}
            />
            <h4 className={_.subtitle}>Lorem ipsum dolor.</h4>
          </div>
        ))}
      </div>
      <div className={_.content}>
        <h3 className={_.title}>
          Follow Our Steps, We will help you
        </h3>
        <p className={_.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo accusantium atque placeat ex unde.
        </p>
      </div>
    </div>
  )
}

export default Steps
