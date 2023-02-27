'use client'

import { TwoLinesIcon } from '#components/svg/icons'
import Actions from './Actions'
import BrandLogo from './BrandLogo'
import _ from './Navbar.module.scss'
import NavLink from './NavLink'
import { useState } from 'react'
import { cx } from '#/shared/utils/classname'

const Navbar: FC = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <header className={_.header}>
      <BrandLogo />
      <nav className={_.navbar}>
        <div className={cx(_.navLinks, open && _.active)}>
          <NavLink onClick={handleMenu} to='/products' text='Productos' />
          <NavLink onClick={handleMenu} to='/about' text='Nosotros' />
          <NavLink onClick={handleMenu} to='/wholesale' text='Vendedores' />
          <NavLink onClick={handleMenu} to='/contact' text='Contactar' />
        </div>
        <Actions />
        <button
          onClick={handleMenu}
          aria-hidden={true}
          type='button'
          className={_.menu}>
          <TwoLinesIcon />
        </button>
      </nav>
    </header>
  )
}

export default Navbar