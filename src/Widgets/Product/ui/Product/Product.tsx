import { ImageSet } from 'Entities/ImageSet'
import { Text } from 'Shared/ui/Text'
import { IImage } from 'Shared/ui/Image'
import { AboutProduct } from '../AboutProduct'
import { ProductType } from 'Shared/types/ProductType'

import s from './Product.module.scss'

const imageSet: IImage[] = [
  { src: 'https://img.mvideo.ru/Pdb/30064946b.jpg' },
  { src: 'https://maxmobiles.ru/images/detailed/31/b5d5c440-5aa1-4498-9fa9-31ebcce9197b_imageid.jpg' },
  { src: 'https://my-apple-store.ru/wa-data/public/shop/products/91/26/12691/images/19877/19877.970.jpg' },
  { src: 'https://cdn0.ispace.am/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083552340064/221010160030636114.png@webp' },
  { src: 'https://i0.wp.com/kuptsovstore.ru/wp-content/uploads/2022/09/iphone14pro_deep_purple_2.jpg?fit=1000%2C1000&ssl=1' },
  { src: 'https://images.biggeek.ru/1/435/3e93/18503-63Deeppurple.jpg' }
]

const product: ProductType = {
  title: 'Testing product name',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor ante sed massa maximus placerat. Suspendisse vel leo maximus, accumsan ipsum in, pellentesque dolor. Cras nec ullamcorper dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
}

export const Product = () => {
  return (
      <div className={s.product}>
          <Text variant='title'>Testing product name</Text>
          <div className={s.info}>
              <ImageSet images={imageSet}/>
              <AboutProduct product={product}/>
          </div>
      </div>
  )
}
