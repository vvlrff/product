import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'

import Container from 'Shared/ui/Container'

import s from './Footer.module.scss'

const Footer: React.FC = () => {
  const { t } = useTypedTranslation('footer')

  return (
      <footer className={s.footer}>
          <Container>{t('title')}</Container>
      </footer>
  )
}

export default Footer
