import SelectBox from '../SelectBox'
import _ from './Infobar.module.scss'

const Infobar: FC = () => {
  return (
    <div className={_.infobar}>
      <section className={_.search}>
        <input type="search" placeholder='Buscar productos' className={_.searchInput} />
      </section>
      <section className={_.filter}>
        <SelectBox />
      </section>
    </div>
  )
}

export default Infobar
