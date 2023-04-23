import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthorizationModal, RegistrationModal } from 'Features'
import { Autocomplete, Button, Container, Logotype, ToggleLanguegeButton, ToggleThemeButton, useAppDispatch, useTypedTranslation } from 'Shared'

import { useSelector } from 'react-redux'
import { getUserAuthState } from '../../model/selectors/getUserAuthState'
import { UserActions } from 'Entities/User'

import s from './Header.module.scss'

const Header: FC = () => {
  const { t } = useTypedTranslation()
  const [isOpenLoginModal, setOpenLoginModal] = useState(false)
  const [isOpenSignUpModal, setOpenSignUpModal] = useState(false)
  const dispatch = useAppDispatch()

  const { accessToken } = useSelector(getUserAuthState)

  if (accessToken) {
    return (
        <header className={s.header}>
            <Container className={s.container}>
                <div className={s.links}>
                    <Link className={s.link} to={'/'}>
                        <Logotype className={s.logotype} />
                    </Link>
                </div>
                <div className={s.search}>
                    <Autocomplete placeholder={t('widget_header_search_placeholder')} />
                </div>
                <div className={s.controls}>
                    <Button
                        onClick={() => dispatch(UserActions.logoutUser())}
                    >{t('widget_header_logout_button')}</Button>
                    <ToggleLanguegeButton>{t('widget_header_languege_switcher')}</ToggleLanguegeButton>
                    <ToggleThemeButton className={s.button}>{t('widget_header_theme_switcher')}</ToggleThemeButton>
                </div>
            </Container>
        </header>
    )
  }

  return (
      <>
          <header className={s.header}>
              <Container className={s.container}>
                  <div className={s.links}>
                      <Link className={s.link} to={'/'}>
                          <Logotype className={s.logotype} />
                      </Link>
                      <span className={s.link} onClick={() => setOpenLoginModal(true)}>{t('widget_header_login_modal')}</span>
                      <span className={s.link} onClick={() => setOpenSignUpModal(true)}>{t('widget_header_signup_modal')}</span>
                  </div>
                  <div className={s.search}>
                      <Autocomplete placeholder={t('widget_header_search_placeholder')} />
                  </div>
                  <div className={s.controls}>
                      <ToggleLanguegeButton>{t('widget_header_languege_switcher')}</ToggleLanguegeButton>
                      <ToggleThemeButton className={s.button}>{t('widget_header_theme_switcher')}</ToggleThemeButton>
                  </div>
              </Container>
          </header>
          <AuthorizationModal
              open={isOpenLoginModal}
              onClose={() => setOpenLoginModal(false)}
            />
          <RegistrationModal
              open={isOpenSignUpModal}
              onClose={() => setOpenSignUpModal(false)}
        />
      </>
  )
}

export default Header
