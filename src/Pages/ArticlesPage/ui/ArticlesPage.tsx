import { FC } from 'react'

import s from './ArticlesPage.module.scss'
import { Layout } from 'Widgets'

interface IArticlesPage {};

const ArticlesPage: FC<IArticlesPage> = (props) => {
  return (
      <Layout>
          Articles
      </Layout>
  )
}

export default ArticlesPage
