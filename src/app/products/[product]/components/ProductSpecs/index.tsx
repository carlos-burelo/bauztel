import { ProductInterface } from '#/shared/types/schemas'
import _ from './ProductSpecs.module.scss'

type Props = Pick<ProductInterface, 'aditionalInfo' | 'reviews' | 'summary'>

const ProductSpecs: FC<Props> = ({ aditionalInfo, reviews, summary }) => {
  const { dimensions, weight } = aditionalInfo
  const { width, height, length } = dimensions

  return (
    <div className={_.specs}>
      <section className={_.summaryArea}>
        <h2 className={_.summaryTitle}>Resumen: </h2>
        <p className={_.summary}>{summary}</p>
      </section>
      <section className={_.aditionalInfoArea}>
        <h2 className={_.aditionalInfoTitle}>Información adicional: </h2>
        <div className={_.aditionalInfo}>
          <div className={_.aditionalInfoItem}>
            <h3 className={_.aditionalInfoItemTitle}>Dimensiones: </h3>
            <p className={_.aditionalInfoItemValue}>
              {width}cm x {height}cm x {length}cm
            </p>
          </div>
          <div className={_.aditionalInfoItem}>
            <h3 className={_.aditionalInfoItemTitle}>Peso: </h3>
            <p className={_.aditionalInfoItemValue}>{weight} mg</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default ProductSpecs
