import { BagIcon, HeartIcon, MagIcon, PersonIcon } from '#components/svg/icons'
import ActionButton from '../ActionButton'
import _ from './Actions.module.scss'

const Actions: FC = () => {
  return (
    <div className={_.actions}>
      <ActionButton label='Buscar'>
        <MagIcon />
      </ActionButton>
      <ActionButton label='Favoritos' to='/favorites'>
        <HeartIcon />
      </ActionButton>
      <ActionButton label='Mi Perfil' to='/profile'>
        <PersonIcon />
      </ActionButton>
      <ActionButton label='Mi carrito' to='/cart'>
        <BagIcon />
      </ActionButton>
    </div>
  )
}

export default Actions
