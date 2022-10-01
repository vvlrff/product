import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useTypedTranslation } from 'Shared/lib/hooks/useTypedTranslation'

import { ToggleLanguegeButton } from 'Features/ToggleLanguegeButton'
import { ToggleThemeButton } from 'Features/ToggleThemeButton'
import Container from 'Shared/ui/Container/ui/Container'
import Logotype from 'Shared/assets/icons/logo.svg'

import s from './Header.module.scss'

const Header: FC = () => {
  const { t } = useTypedTranslation('header')

  return (
      <header className={s.header}>
          <Container className={s.container}>
              <div className={s.links}>
                  <Link className={s.link} to={'/'}>
                      <Logotype className={s.logotype} />
                  </Link>
                  <Link className={s.link} to={'/about'}>{t('aboutPage')}</Link>
                  <Link className={s.link} to={'/news'}>{t('newsPage')}</Link>
              </div>
              <div className={s.controls}>
                  <ToggleLanguegeButton>{t('languegeSwitcher')}</ToggleLanguegeButton>
                  <ToggleThemeButton>{t('themeSwitcher')}</ToggleThemeButton>
              </div>
          </Container>
      </header>
  )
}

export default Header
