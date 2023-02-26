import Link from 'next/link'
import _ from './NavLink.module.scss'


interface Props {
  to: string
  text: string
}

const NavLink: FC<Props> = ({ to, text }) => {
  return (
    <Link className={_.link} href={to}>
      {text}
    </Link>
  )
}

export default NavLink