import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'

import s from './Footer.module.scss'

const Footer: React.FC = () => {
  const { t } = useTypedTranslation('footer')

  return (
      <footer className={s.footer}>
          {t('title')}
      </footer>
  )
}

export default Footer
