import { Button } from 'Shared'
import { ProductType } from 'Shared/types/ProductType'
import { Text } from 'Shared/ui/Text'

import s from './AboutProduct.module.scss'

interface IProduct {
  product: ProductType
}

export const AboutProduct = (props: IProduct) => {
  const { product: { title, description } } = props

  return (
      <div className={s.about}>
          <div className={s.wrapper}>
              <Text variant='title'>{title}</Text>
              <Text variant='text'>{description}</Text>
              <Text variant='text'>{description}</Text>
              <div className={s.actions}>
                  <Button>Добавить в корзину</Button>
                  <Button>Купить сейчас</Button>
              </div>
          </div>
      </div>
  )
}
