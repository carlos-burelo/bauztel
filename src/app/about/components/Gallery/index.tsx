'use client'
import { GALLERY } from '#/shared/mocks/gallery'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import _ from './Gallery.module.scss'
import { ArroRightIcon, ArroLeftIcon } from '#components/svg/icons'

const Gallery: FC = () => {
  const [current, setCurrent] = useState(0)
  const [index, setIndex] = useState(0)
  const slider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (slider.current !== null) {
      slider.current.scrollTo({
        left: current,
        behavior: 'smooth'
      })
    }
  }, [current, slider])

  useEffect(() => {
    if (slider.current !== null) {
      const width = slider.current.clientWidth
      const nextView = index * width
      setCurrent(nextView)
    }
  }, [index, slider])

  const handlePrev = () => {
    if (index === 0) return
    setIndex(index - 1)
  }

  const handleNext = () => {
    if (index === GALLERY.length - 1) return
    setIndex(index + 1)
  }
  const styles = {
    gridTemplateColumns: `repeat(${GALLERY.length}, 1fr)`,
  }

  return (
    <div className={_.container}>
      <header className={_.head}>
        <h3 className={_.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className={_.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique eum eveniet recusandae animi officiis veniam eaque facere! Pariatur, porro.
        </p>
      </header>
      <div className={_.slider}>
        <div ref={slider} className={_.gallery} style={styles}>
          {GALLERY.map((i, index) => (
            <Image
              key={index}
              src={i}
              alt="Gallery"
              width={300}
              height={300}
              className={_.img}
            />
          ))}
        </div>
        <div className={_.buttons}>
          <button
            className={_.btn}
            title="Previous"
            type='button'
            onClick={handlePrev}
          >
            <ArroLeftIcon />
          </button>
          <button
            className={_.btn}
            title="Next"
            type='button'
            onClick={handleNext}
          >
            <ArroRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
