import _ from './about.module.scss'
import AboutUs from './components/AboutUs'
import Distinctions from './components/Distinctions'
import Gallery from './components/Gallery'
import Presentation from './components/Presentation'

const about: Page = () => {
  return (
    <div className={_.container}>
      <Presentation />
      <Distinctions />
      <Gallery />
      <AboutUs />
    </div>
  )
}

export default about
