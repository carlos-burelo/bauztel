import Image from 'next/image'
import _ from './DistinctionCard.module.scss'

interface Props {
  image: string
  title: string
  description: string
}

const DistinctionCard: FC<Props> = ({ description, image = '/coffe-icon-1.png', title }) => {
  return (
    <div className={_.distinctionCard}>
      <div className={_.image}>
        <Image
          alt={title}
          height={100}
          width={100}
          src={image}
          priority
        />
      </div>
      <h3 className={_.title}>
        {title}
      </h3>
      <p className={_.description}>
        {description}
      </p>
    </div>
  )
}

export default DistinctionCard
