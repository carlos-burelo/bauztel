import { TwoLinesIcon } from '#components/svg/icons'
import Actions from './Actions'
import BrandLogo from './BrandLogo'
import _ from './Navbar.module.scss'
import NavLink from './NavLink'

const Navbar: FC = () => {
  return (
    <header className={_.header}>
      <BrandLogo />
      <nav className={_.navbar}>
        <div className={_.navLinks}>
          <NavLink to='/' text='Inicio' />
          <NavLink to='/products' text='Productos' />
          <NavLink to='/about-us' text='Sobre nosotros' />
          <NavLink to='/seller' text='Vendedores' />
        </div>
        <Actions />
        <button aria-hidden={true} type='button' className={_.menu}>
          <TwoLinesIcon />
        </button>
      </nav>
    </header>
  )
}

export default Navbar