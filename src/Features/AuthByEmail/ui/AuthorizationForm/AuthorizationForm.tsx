import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux'

import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'

import { LoginActions, LoginReducer } from '../../model/slices/LoginSlice'
import { LoginByEmail } from '../../model/services/AuthByEmail/AuthByEmail'
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

import s from './AuthorizationForm.module.scss'
import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const initialReducers: ReducersList = { loginStateSchema: LoginReducer }

interface IAuthorizationForm {
  onLoginSuccess?: () => void
}

const AuthorizationForm = memo(({ onLoginSuccess }: IAuthorizationForm) => {
  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation()

  const email = useSelector(getLoginEmail)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const onEmailChange = useCallback((value: string) => {
    dispatch(LoginActions.setEmail(value))
  }, [dispatch])

  const onPasswordChange = useCallback((value: string) => {
    dispatch(LoginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const response = await dispatch(LoginByEmail({ email, password }))
    if (response.meta.requestStatus === 'fulfilled') {
      onLoginSuccess()
    }
  }, [dispatch, onLoginSuccess, email, password])

  return (
      <DynamicModuleLoader reducers={initialReducers}>
          <div className={s.form}>
              <span className={s.title}>{t('feature_auth_by_email_title')}</span>
              {error && <span className={s.error}>{error}</span>}
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
      </DynamicModuleLoader>
  )
})

export default AuthorizationForm
