import { DISTINCTIONS } from '#/shared/mocks/distinctions'
import DistinctionCard from '../DistinctionCard'
import _ from './Distinctions.module.scss'

const Distinctions: FC = () => {
  return (
    <div className={_.distinctions}>
      <header className={_.head}>
        <h2 className={_.title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
        <p className={_.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit molestias excepturi quibusdam eius perferendis veritatis.
        </p>
      </header>
      <div className={_.cards}>
        {
          DISTINCTIONS.map((distinction, index) => (
            <DistinctionCard key={index} {...distinction} />
          ))
        }
      </div>
    </div>
  )
}

export default Distinctions
