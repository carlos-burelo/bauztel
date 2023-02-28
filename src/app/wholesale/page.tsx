import Hero from './components/Hero'
import Steps from './components/Steps'
import _ from './wholesale.module.scss'

const WholesalePage: Page = () => {
  return (
    <div className={_.container}>
      <Hero />
      <Steps />
    </div >
  )
}

export default WholesalePage
