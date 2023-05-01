import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'
import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { CreateUserAction, CreateUserReducer } from '../../model/slices/registerUserByEmail/RegisterUserByEmail'
import { RegisterByEmail } from '../../model/services/RegisterUserByEmail/RegisterByEmail'

import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail'
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword'
import { getRegistrationLoading } from '../../model/selectors/getRegistrationLoading/getRegistrationLoading'
import { getRegistrationError } from '../../model/selectors/getRegistrationError/getRegistrationError'

import s from './RegistrationForm.module.scss'

const initialReducers: ReducersList = { registerUserSchema: CreateUserReducer }

const RegistrationForm = memo(() => {
  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation()

  const email = useSelector(getRegistrationEmail)
  const password = useSelector(getRegistrationPassword)
  const isLoading = useSelector(getRegistrationLoading)
  const error = useSelector(getRegistrationError)

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
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
      </DynamicModuleLoader>
  )
})

export default RegistrationForm
