import Link from 'next/link'
import _ from './ActionButton.module.scss'

interface Props {
  label: string
  to?: string
}

const ActionButton: FC<Props> = ({ children, label, to }) => {
  return to ? (
    <Link className={_.action} href={to}>
      {children}
    </Link>
  ) : (
    <button type='button' className={_.action} title={label} role='button' aria-label={label}  >
      {children}
    </button >
  )
}

export default ActionButton
