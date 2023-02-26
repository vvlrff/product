import { useCallback, FC } from 'react'
import { useSelector } from 'react-redux'

import { getLoginState } from '../../model/selectors/getLoginState'
import { LoginActions } from '../../model/slices/LoginSlice'
import { LoginByEmail } from '../../model/services/AuthByEmail/AuthByEmail'

import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'

import s from './AuthorizationForm.module.scss'

const AuthorizationForm: FC = () => {
  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation()

  const { email, password, isLoading, error } = useSelector(getLoginState)

  const onEmailChange = useCallback((value: string) => {
    dispatch(LoginActions.setEmail(value))
  }, [dispatch])

  const onPasswordChange = useCallback((value: string) => {
    dispatch(LoginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(LoginByEmail({ email, password }))
  }, [dispatch, email, password])

  return (
      <div className={s.form}>
          <span className={s.title}>{t('feature_auth_by_email_title')}</span>
          { error && <span className={s.error}>{error}</span> }
          <div className={s.fields}>
              <TextInput
                  placeholder={t('feature_auth_by_email_placeholder')}
                  value={email}
                  onChange={onEmailChange}
        />
              <TextInput
                  type='password'
                  placeholder={t('feature_auth_by_email_password_placeholder')}
                  value={password}
                  onChange={onPasswordChange}
        />
              <Button
                  onClick={onLoginClick}
                  disabled={isLoading}
              >{t('feature_auth_by_email_button_text')}</Button>
          </div>
      </div>
  )
}

export default AuthorizationForm
