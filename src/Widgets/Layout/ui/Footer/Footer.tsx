import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'

import s from './Footer.module.scss'

const Footer: React.FC = () => {
  const { t } = useTypedTranslation()

  return (
      <footer className={s.footer}>
          {t('widget_footer_title')}
      </footer>
  )
}

export default Footer
