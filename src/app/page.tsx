import Landing from './home/components/Landing'
import LatestProducts from './home/components/LatestProducts'
import Order from './home/components/Order'
import _ from './home/home.module.scss'


const HomePage: Page = () => {
  return (
    <div className={_.container}>
      <Landing />
      <LatestProducts />
      <Order />
    </div>
  )
}

export default HomePage