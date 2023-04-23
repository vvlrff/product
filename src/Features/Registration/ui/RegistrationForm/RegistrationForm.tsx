import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'

import { CreateUserAction } from '../../model/slices/registerUserByEmail/RegisterUserByEmail'
import { RegisterByEmail } from '../../model/services/RegisterUserByEmail/RegisterByEmail'
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail'
import { getRegistartionError } from '../../model/selectors/getRegistartionError/getRegistartionError'
import { getRegistrationIsLoading } from '../../model/selectors/getRegistrationIsLoading/getRegistrationIsLoading'
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword'

import s from './RegistrationForm.module.scss'

const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation()
  const email = useSelector(getRegistrationEmail)
  const password = useSelector(getRegistrationPassword)
  const error = useSelector(getRegistartionError)
  const isLoading = useSelector(getRegistrationIsLoading)

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
