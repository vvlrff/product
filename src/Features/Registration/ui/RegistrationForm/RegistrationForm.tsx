import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { getRegistrationState } from '../../model/selectors/getRegistrationState'
import { CreateUserAction } from '../../model/slices/registerUserByEmail/RegisterUserByEmail'
import { RegisterByEmail } from '../../model/services/RegisterUserByEmail/RegisterByEmail'
import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'

import s from './RegistrationForm.module.scss'

const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation()
  const { email, password, isLoading, error } = useSelector(getRegistrationState)

  const onChahgeEmail = useCallback((value: string) => {
    dispatch(CreateUserAction.setEmail(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(CreateUserAction.setPassword(value))
  }, [dispatch])

  const handleRegister = useCallback(() => {
    dispatch(RegisterByEmail({ email, password }))
  }, [dispatch, email, password])

  return (
      <div className={s.form}>
          <span className={s.title}>{t('feature_register_by_email_title')}</span>
          {error && <span>{error}</span>}
          <div className={s.fields}>
              <TextInput
                  placeholder={t('feature_register_by_email_placeholder')}
                  value={email}
                  onChange={onChahgeEmail}
        />
              <TextInput
                  type='password'
                  placeholder={t('feature_register_by_email_password_placeholder')}
                  value={password}
                  onChange={onChangePassword}
        />
              <Button
                  onClick={handleRegister}
                  disabled={isLoading}
              >{t('feature_register_by_email_button_text')}</Button>
          </div>
      </div>
  )
}

export default RegistrationForm
