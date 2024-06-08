import { DISTINCTIONS } from '#/shared/mocks/distinctions'
import DistinctionCard from '../DistinctionCard'
import _ from './Distinctions.module.scss'

const Distinctions: FC = () => {
  return (
    <div className={_.distinctions}>
      <header className={_.head}>
        <h2 className={_.title}>
          Explora la Amplia Gama de Sensaciones que Ofrecemos con Nuestro Café
        </h2>
        <p className={_.text}>
          Descubre los Diversos Beneficios de Nuestra Amplia Selección de Cafés Especiales: Una Experiencia Sensorial para Todos los Sentidos
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
