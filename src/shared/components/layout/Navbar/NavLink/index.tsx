import Link from 'next/link'
import _ from './NavLink.module.scss'


interface Props {
  to: string
  text: string
  onClick?: () => void
}

const NavLink: FC<Props> = ({ to, text, onClick }) => {
  return (
    <Link className={_.link} href={to} onClick={onClick}>
      {text}
    </Link>
  )
}

export default NavLink