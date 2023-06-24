import { FC } from 'react'

import { Layout } from 'Widgets'
import { Article } from 'Entities/Article'

import s from './ArticleSinglePage.module.scss'

interface IArticleSinglePage {};

const ArticleSinglePage: FC<IArticleSinglePage> = (props) => {
  return (
      <Layout>
          <Article/>
      </Layout>
  )
}

export default ArticleSinglePage
