import { FC } from 'react'
import { Layout } from 'Widgets'

import s from './NotFoundPage.module.scss'

export const NotFoundPage: FC = (props) => {
  return (
      <Layout>
          <span className={s.title}>Страница не найдена</span>
      </Layout>
  )
}
