import _ from './BrandLogo.module.scss'
import Link from 'next/link'

const BrandLogo: FC = () => {
  return (
    <Link href='/' className={_.logo}>
      Café Bauztel
    </Link>
  )
}

export default BrandLogo
