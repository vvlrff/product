import { useState, MouseEvent } from 'react'
import cn from 'classnames'
import { IImage, Image } from 'Shared/ui/Image'

import s from './ImageSet.module.scss'

interface IImageSet {
  images: IImage[]
}

export const ImageSet = (props: IImageSet) => {
  const { images } = props
  const [selected, setSelected] = useState(images[0])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelectImage = (e: MouseEvent<HTMLElement>) => {
    // @ts-expect-error
    const selectedImageIndex = Number(e.target.getAttribute('data-index'))
    setSelected(images[selectedImageIndex])
    setSelectedIndex(selectedImageIndex)
  }

  return (
      <div className={s.imageset}>
          <div className={s.wrapper}>
              <div className={s.navbar}>
                  {images.map(({ src }, index) => (
                      <Image
                          key={index}
                          src={src}
                          onClick={onSelectImage}
                          className={cn(s.image_preview, { [s.selected]: index === selectedIndex })}
                          data-index={index}
                  />
                  ))}
              </div>
              <div className={s.main}>
                  <Image src={selected.src} className={s.poster}/>
              </div>
          </div>
      </div>
  )
}
