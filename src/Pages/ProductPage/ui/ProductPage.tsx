import { FC } from 'react'
import { Container } from 'Shared'
import { Layout } from 'Widgets'
import { Product } from 'Widgets/Product'

const ProductPage: FC = (props) => {
  return (
      <Layout>
          <Container>
              <Product/>
          </Container>
      </Layout>
  )
}

export default ProductPage
