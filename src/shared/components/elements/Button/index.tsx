import { cx } from '#/shared/utils/classname'
import Link from 'next/link'
import _ from './Button.module.scss'

interface Props {
  text: string
  href?: string
  className?: string
  fit?: boolean
}

const Button: FC<Props> = ({ text, href, className, fit }) => {
  const styles = {
    width: fit ? 'fit-content' : 'auto'
  }

  return href ? (
    <Link href={href} style={styles} className={cx(_.btn, className)}>
      {text}
    </Link>
  ) : (
    <button style={styles} className={cx(_.btn, className)}>
      {text}
    </button>
  )
}

export default Button
