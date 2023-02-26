import _ from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={_.header}>
      <h1 className={_.title}>Disfruta de nuestros productos</h1>
      <p className={_.breadcrumb}>
        Bauztel ☕ / Productos
      </p>
    </header>
  )
}

export default Header
