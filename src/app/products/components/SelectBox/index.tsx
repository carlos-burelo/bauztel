'use client'
import _ from './SelectBox.module.scss'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Filter {
  slug: string
  name: string
}

interface Category {
  section: string
  options: Filter[]
}

interface Props {
  options: Category[]
  defaultValue: string
}

const TEST_OPTIONS: Props = {
  options: [
    {
      section: 'Precio',
      options: [
        {
          slug: 'minor-price',
          name: 'Menor precio',
        },
        {
          slug: 'higher-price',
          name: 'Mayor precio',
        },
      ]
    },
    {
      section: 'Relevancia',
      options: [
        {
          slug: 'featured',
          name: 'Destacados',
        },
        {
          slug: 'best-sellers',
          name: 'Más vendidos',
        },
        {
          slug: 'new-arrivals',
          name: 'Novedades',
        }
      ]
    }
  ],
  defaultValue: 'Todos',

}

const SelectBox: FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selected, setSelected] = useState(TEST_OPTIONS.defaultValue)
  const [open, setOpen] = useState(false)

  const handleSelect = (filter: string) => {
    router.push(`/products?${filter}`)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <h4 className={_.title} onClick={handleOpen}>Filtrar por</h4>
      <div className={_.selectBox} style={{ display: open ? 'block' : 'none' }}>
        {TEST_OPTIONS.options.map((category, index) => (
          <div key={index} className={_.category} >
            <h4 className={_.categoryTitle}>{category.section}</h4>
            <ul className={_.categoryOptions}>
              {category.options.map((option, index) => (
                <Link href={`/products?filter=${option.slug}`} onClick={handleOpen} key={index}>
                  {option.name}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default SelectBox
