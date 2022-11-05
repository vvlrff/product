import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from 'Shared'

import s from './NotFoundPage.module.scss'

const NotFoundPage: FC = (props) => {
  const { t } = useTranslation('NotFoundPage')

  return (
      <Container className={s.container}>
          <span className={s.info}>{t('NothingFound')}</span>
          <Link to={'/'} className={s.link}>{t('GetBack')}</Link>
      </Container>
  )
}

export default NotFoundPage
