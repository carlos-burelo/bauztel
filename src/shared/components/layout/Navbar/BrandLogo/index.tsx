import _ from './BrandLogo.module.scss'
import Link from 'next/link'

const BrandLogo: FC = () => {
  return (
    <Link href='/' className={_.logo}>
      Bauztel Coffe
    </Link>
  )
}

export default BrandLogo
